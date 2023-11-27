import {CreateSubversionConfig} from "./Constant/Config";
import {SubversionShellCommonOption} from "./Constant/CommonOption";
import {SubversionLocal} from "./instance/Local";
import {SubversionRemote} from "./instance/Remote";
import * as fs from "fs";
import {RemoveEndWithSlash} from "./Helper/PathHelper";
import * as path from "path";

export class Subversion {
    /** 相对于根路径的路径(远端) */
    public relative_path: string = "";
    /** 本地的绝对路径 */
    public local_absolute_path: string = "";

    /** subversion 在本地的代理 */
    public local: SubversionLocal = new SubversionLocal(this);
    /** subversion 在远端的代理 */
    public remote: SubversionRemote = new SubversionRemote(this);

    constructor(
        public readonly config: CreateSubversionConfig,
        public readonly commonCommandOption: SubversionShellCommonOption,
    ) {
        if (!fs.existsSync(this.config.subversion_command_path)) throw new Error("定义的 subversion 可执行文件不存在")
        this.config.remote_root_path = RemoveEndWithSlash(this.config.remote_root_path);

    }

    /** subversion 的命令行二进制文件 */
    public get subversion_command(): string {
        return this.config.subversion_command_path;
    }

    /** 去相对于 根路径 的相对路径 */
    public gotoAbsolute(_path: string) {
        this.local_absolute_path = "";
        _path = RemoveEndWithSlash(_path);
        this.relative_path = _path;
    }

    /** 去相对于 relative_path 的路径 */
    public gotoRelative(_path: string) {
        this.local_absolute_path = path.join(this.local_absolute_path, _path);
        _path = path.join(this.relative_path, _path)
        _path = RemoveEndWithSlash(_path);
        this.relative_path = _path;
    }

    /** 定义本地的绝对路径 */
    public setLocalAbsolutePath(_path: string) {
        _path = RemoveEndWithSlash(_path);
        this.local_absolute_path = _path;
    }
}