import { AbstractSvnCommand } from "../AbstractSvnCommand";
import { SubversionListCommandOption, SubversionListData } from "./SvnListInterface";
import { RunShellCommandConfig } from "../../Constant/Config";
export declare class SvnListCommand extends AbstractSvnCommand<SubversionListData, SubversionListCommandOption> {
    constructor(opts: RunShellCommandConfig<SubversionListData, SubversionListCommandOption>);
    run(): Promise<any>;
}
