import {RunShellCommandConfig} from "../Constant/Config";
import {TypeExecFunction, ExecWithEnUs} from "../Helper/ExecHelper";
import {SubversionShellOption} from "../Constant/CommonOption";
import {CommandOptionToShellLine} from "../Helper/TransformHelper";

export abstract class AbstractSvnCommand<DATA, OPTION extends SubversionShellOption> {

    protected constructor(protected readonly opt: RunShellCommandConfig<DATA, OPTION>) {
    }

    abstract run(): Promise<any>;

    protected async appendCommandLineAndRun(cmd: string): Promise<any> {
        cmd = this.appendCommandLineOption(cmd);
        let res = await this.getExecFunction()(cmd);
        const splitFunction = this.getSplitFunction();
        if (splitFunction) return splitFunction(res, this.opt);
        return res;
    }

    protected getExecFunction(): TypeExecFunction {
        if (this.opt.execFunction) return this.opt.execFunction;
        return ExecWithEnUs;
    }

    protected getSplitFunction(): TypeSplitFunction | undefined {
        if (this.opt.SplitFunction) return this.opt.SplitFunction;
        if ("SplitFunction" in this) {
            let func = <TypeExecFunction>this.SplitFunction
            return func.bind(this)
        }
        return undefined
    }

    protected appendCommandLineOption(cmd: string): string {
        if (this.opt.option) cmd += ` ${CommandOptionToShellLine(this.opt.option)}`
        if (this.opt.commonOption) cmd += ` ${CommandOptionToShellLine(this.opt.commonOption)}`;
        return cmd;
    }

}

export type TypeSplitFunction = (reply: string, opt: RunShellCommandConfig<any, any>) => any;