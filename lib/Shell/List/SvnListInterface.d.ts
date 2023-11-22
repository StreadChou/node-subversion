import { SubversionShellOption, SvnRevisionType, SvnDepthType } from "../../Constant/CommonOption";
/** svn list 的命令行参数 */
export interface SubversionListData {
    /** svn list 需要传入一个路径, 也就是列出这个路径下的所有文件 */
    path: string;
}
/** svn list 的命令行参数 */
export interface SubversionListCommandOption extends SubversionShellOption {
    /** ARG (一些命令也接受ARG1:ARG2范围) */
    revision?: SvnRevisionType;
    /** 打印附加信息 */
    verbose?: boolean;
    /** 向下递归，与 --depth=infinity 相同 */
    recursive?: boolean;
    /** with --verbose, show file sizes with base-2 unit suffixes (Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte), limiting the number of digits to three or less */
    "human-readable"?: boolean;
    /** 限制操作深度是 ARG */
    depth?: SvnDepthType;
    /** 给予适合串联的输出 */
    incremental?: boolean;
    /** 输出为 XML */
    xml?: boolean;
    /** also operate on externals defined by svn:externals properties */
    "include-externals"?: boolean;
    /** use ARG as search pattern (glob syntax, case and accent-insensitive, may require quotation marks to prevent shell expansion) */
    search?: string;
}
