import {SubversionShellOption} from "../Constant/CommonOption";

/** 将Object转换为命令行参数 */
export function CommandOptionToShellLine(option_list: SubversionShellOption | Array<SubversionShellOption>) {
    let cmd = ``;
    const list: Array<SubversionShellOption> = Array.isArray(option_list) ? option_list : [option_list];
    for (let option of list) {
        Object.keys(option).forEach(ele => {
            if (typeof option[ele] === "boolean" && option[ele]) {
                cmd += ` --${ele} `;
            } else {
                cmd += ` --${ele} ${option[ele]} `;
            }
        })
    }
    return cmd;
}