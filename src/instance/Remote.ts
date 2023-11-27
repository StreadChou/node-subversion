import {Subversion} from "../Subversion";
import {SubversionListCommandOption, SubversionListData} from "../Shell/List/SvnListInterface";
import {RunShellCommandConfig} from "../Constant/Config";
import {SvnListCommand} from "../Shell/List/SvnListCommand";

/** subversion 的远程管理 */
export class SubversionRemote {

    constructor(private readonly subversion: Subversion) {
    }

    get path() {
        return `${this.subversion.config.remote_root_path}/${this.subversion.relative_path}`
    }

    async list(option?: SubversionListCommandOption) {
        const opts: RunShellCommandConfig<SubversionListData, SubversionListCommandOption> = {
            subversion_command: this.subversion.subversion_command,
            data: {path: this.path},
            option: option,
            commonOption: this.subversion.commonCommandOption,
        }
        const command = new SvnListCommand(opts);
        return command.run();
    }

}