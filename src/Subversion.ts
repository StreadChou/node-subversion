import {CreateSubversionConfig, RunShellCommandConfig} from "./Constant/Config";
import {SubversionShellCommonOption} from "./Constant/CommonOption";
import {SvnListCommand} from "./Shell/List/SvnListCommand";
import {SubversionListCommandOption, SubversionListData} from "./Shell/List/SvnListInterface";

export class Subversion {

    /** 相对于根路径的路径 */
    public relative_path: string = "";

    constructor(
        private readonly config: CreateSubversionConfig,
        private readonly commonCommandOption: SubversionShellCommonOption,
    ) {

    }

    public get subversion_command(): string {
        return this.config.subversion_command_path;
    }

    public get remote_path(): string {
        if (this.relative_path.startsWith("/")) {
            return `${this.config.remote_root_path}${this.relative_path}`
        } else {
            return `${this.config.remote_root_path}/${this.relative_path}`
        }

    }


    async list(option?: SubversionListCommandOption) {
        const opts: RunShellCommandConfig<SubversionListData, SubversionListCommandOption> = {
            subversion_command: this.subversion_command,
            data: {path: this.remote_path},
            option: option,
            commonOption: this.commonCommandOption,
        }
        const command = new SvnListCommand(opts);
        return command.run();
    }

}