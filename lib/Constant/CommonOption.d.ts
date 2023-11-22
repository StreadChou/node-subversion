/** subversion 命令行的属性 */
export interface SubversionShellOption {
    [key: string]: any;
}
/** subversion 命令行的通用参数 */
export interface SubversionShellCommonOption extends SubversionShellOption {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    "no-auth-cache"?: boolean;
    "non-interactive"?: boolean;
    "force-interactive"?: boolean;
    "trust-server-cert"?: boolean;
    "trust-server-cert-failures"?: string;
    "config-dir"?: string;
    "config-option"?: string;
}
/** 限制操作深度是 ARG ('empty', 'files','immediates', 或 'infinity') */
export type SvnDepthType = "empty" | "files" | "immediates" | "infinity";
/**
 * NUMBER       版本号
 * '{' DATE '}' 在指定时间以后的版本
 * 'HEAD'       版本库中的最新版本
 * 'BASE'       工作副本的基线版本
 * 'COMMITTED'  最后提交或基线之前
 * 'PREV'       COMMITTED的前一版本
 */
export type SvnRevisionType = number | string | 'HEAD' | 'BASE' | 'COMMITTED' | 'PREV';
export declare enum SvnFileActionCharacters {
    Added = "A",
    Deleted = "D",
    Updated = "U",
    Conflict = "C",
    Merged = "M",
    Existed = "E",
    Replaced = "R"
}
