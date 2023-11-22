"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandOptionToShellLine = void 0;
/** 将Object转换为命令行参数 */
function CommandOptionToShellLine(option_list) {
    let cmd = ``;
    const list = Array.isArray(option_list) ? option_list : [option_list];
    for (let option of list) {
        Object.keys(option).forEach(ele => {
            if (typeof option[ele] === "boolean" && option[ele]) {
                cmd += ` --${ele} `;
            }
            else {
                cmd += ` --${ele} ${option[ele]} `;
            }
        });
    }
    return cmd;
}
exports.CommandOptionToShellLine = CommandOptionToShellLine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0hlbHBlci9UcmFuc2Zvcm1IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsc0JBQXNCO0FBQ3RCLFNBQWdCLHdCQUF3QixDQUFDLFdBQWlFO0lBQ3RHLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLE1BQU0sSUFBSSxHQUFpQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEcsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDbEQsR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDeEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBYkQsNERBYUMifQ==