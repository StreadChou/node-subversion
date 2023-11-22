import { RunShellCommandConfig } from "../Constant/Config";
import { TypeExecFunction } from "../Helper/ExecHelper";
import { SubversionShellOption } from "../Constant/CommonOption";
export declare abstract class AbstractSvnCommand<DATA, OPTION extends SubversionShellOption> {
    protected readonly opt: RunShellCommandConfig<DATA, OPTION>;
    protected constructor(opt: RunShellCommandConfig<DATA, OPTION>);
    abstract run(): Promise<any>;
    protected appendCommandLineAndRun(cmd: string): Promise<any>;
    protected getExecFunction(): TypeExecFunction;
    protected getSplitFunction(): TypeSplitFunction | undefined;
    protected appendCommandLineOption(cmd: string): string;
}
export type TypeSplitFunction = (reply: string, opt: RunShellCommandConfig<any, any>) => any;
