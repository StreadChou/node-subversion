import {SubversionShellCommonOption, SubversionShellOption} from "./CommonOption";
import {TypeExecFunction} from "../Helper/ExecHelper";
import {TypeSplitFunction} from "../Shell/AbstractSvnCommand";

export interface CreateSubversionConfig {
    /** SVN命令行的路径 */
    subversion_command_path: string;

    /** 远端的根路径, */
    remote_root_path?: string;
    /** 本地的根路径, */
    local_root_path?: string;
}

export interface RunShellCommandConfig<DATA, OPTION extends SubversionShellOption> {
    subversion_command: string;
    data: DATA;
    option?: OPTION;
    commonOption?: SubversionShellCommonOption;
    execFunction?: TypeExecFunction;
    SplitFunction?: TypeSplitFunction;
}