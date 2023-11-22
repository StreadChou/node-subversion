import {AbstractSvnCommand} from "../AbstractSvnCommand";
import {SubversionListCommandOption, SubversionListData} from "./SvnListInterface";
import {RunShellCommandConfig} from "../../Constant/Config";

export class SvnListCommand extends AbstractSvnCommand<SubversionListData, SubversionListCommandOption> {

    public constructor(opts: RunShellCommandConfig<SubversionListData, SubversionListCommandOption>) {
        super(opts);
    }

    public async run(): Promise<any> {
        let cmd = `svn list ${this.opt.data.path} `;
        return this.appendCommandLineAndRun(cmd);
    }

}