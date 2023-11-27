import {Subversion} from "../Subversion";
import * as path from "path";
import {PathException} from "../Exception/PathException";


/** subversion 的本地管理 */
export class SubversionLocal {
    constructor(private readonly subversion: Subversion) {

    }

    get path(): string {
        if (this.subversion.local_absolute_path) return this.subversion.local_absolute_path;
        if (!this.subversion.config.local_root_path) throw new PathException("本地路径没有定义");
        return path.join(this.subversion.config.local_root_path, this.subversion.relative_path)
    }

}