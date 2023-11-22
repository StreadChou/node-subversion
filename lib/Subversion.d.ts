import { CreateSubversionConfig } from "./Constant/Config";
import { SubversionShellCommonOption } from "./Constant/CommonOption";
import { SubversionListCommandOption } from "./Shell/List/SvnListInterface";
export declare class Subversion {
    private readonly config;
    private readonly commonCommandOption;
    /** 相对于根路径的路径 */
    relative_path: string;
    constructor(config: CreateSubversionConfig, commonCommandOption: SubversionShellCommonOption);
    get subversion_command(): string;
    get remote_path(): string;
    list(option?: SubversionListCommandOption): Promise<any>;
}
