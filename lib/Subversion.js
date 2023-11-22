"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subversion = void 0;
const SvnListCommand_1 = require("./Shell/List/SvnListCommand");
class Subversion {
    config;
    commonCommandOption;
    /** 相对于根路径的路径 */
    relative_path = "";
    constructor(config, commonCommandOption) {
        this.config = config;
        this.commonCommandOption = commonCommandOption;
    }
    get subversion_command() {
        return this.config.subversion_command_path;
    }
    get remote_path() {
        if (this.relative_path.startsWith("/")) {
            return `${this.config.remote_root_path}${this.relative_path}`;
        }
        else {
            return `${this.config.remote_root_path}/${this.relative_path}`;
        }
    }
    async list(option) {
        const opts = {
            subversion_command: this.subversion_command,
            data: { path: this.remote_path },
            option: option,
            commonOption: this.commonCommandOption,
        };
        const command = new SvnListCommand_1.SvnListCommand(opts);
        return command.run();
    }
}
exports.Subversion = Subversion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9TdWJ2ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGdFQUEyRDtBQUczRCxNQUFhLFVBQVU7SUFNRTtJQUNBO0lBTHJCLGdCQUFnQjtJQUNULGFBQWEsR0FBVyxFQUFFLENBQUM7SUFFbEMsWUFDcUIsTUFBOEIsRUFDOUIsbUJBQWdEO1FBRGhELFdBQU0sR0FBTixNQUFNLENBQXdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNkI7SUFHckUsQ0FBQztJQUVELElBQVcsa0JBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDakUsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDbEUsQ0FBQztJQUVMLENBQUM7SUFHRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQW9DO1FBQzNDLE1BQU0sSUFBSSxHQUEyRTtZQUNqRixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQzlCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDekMsQ0FBQTtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUo7QUFyQ0QsZ0NBcUNDIn0=