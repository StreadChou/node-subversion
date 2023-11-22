"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSvnCommand = void 0;
const ExecHelper_1 = require("../Helper/ExecHelper");
const TransformHelper_1 = require("../Helper/TransformHelper");
class AbstractSvnCommand {
    opt;
    constructor(opt) {
        this.opt = opt;
    }
    async appendCommandLineAndRun(cmd) {
        cmd = this.appendCommandLineOption(cmd);
        let res = await this.getExecFunction()(cmd);
        const splitFunction = this.getSplitFunction();
        if (splitFunction)
            return splitFunction(res, this.opt);
        return res;
    }
    getExecFunction() {
        if (this.opt.execFunction)
            return this.opt.execFunction;
        return ExecHelper_1.ExecWithEnUs;
    }
    getSplitFunction() {
        if (this.opt.SplitFunction)
            return this.opt.SplitFunction;
        if ("SplitFunction" in this) {
            let func = this.SplitFunction;
            return func.bind(this);
        }
        return undefined;
    }
    appendCommandLineOption(cmd) {
        if (this.opt.option)
            cmd += ` ${(0, TransformHelper_1.CommandOptionToShellLine)(this.opt.option)}`;
        if (this.opt.commonOption)
            cmd += ` ${(0, TransformHelper_1.CommandOptionToShellLine)(this.opt.commonOption)}`;
        return cmd;
    }
}
exports.AbstractSvnCommand = AbstractSvnCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RTdm5Db21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1NoZWxsL0Fic3RyYWN0U3ZuQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBb0U7QUFFcEUsK0RBQW1FO0FBRW5FLE1BQXNCLGtCQUFrQjtJQUVLO0lBQXpDLFlBQXlDLEdBQXdDO1FBQXhDLFFBQUcsR0FBSCxHQUFHLENBQXFDO0lBQ2pGLENBQUM7SUFJUyxLQUFLLENBQUMsdUJBQXVCLENBQUMsR0FBVztRQUMvQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDLElBQUksYUFBYTtZQUFFLE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRVMsZUFBZTtRQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDeEQsT0FBTyx5QkFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFUyxnQkFBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7WUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQUksZUFBZSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksSUFBSSxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUFBO1lBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUE7SUFDcEIsQ0FBQztJQUVTLHVCQUF1QixDQUFDLEdBQVc7UUFDekMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07WUFBRSxHQUFHLElBQUksSUFBSSxJQUFBLDBDQUF3QixFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUMzRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUFFLEdBQUcsSUFBSSxJQUFJLElBQUEsMENBQXdCLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3hGLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUVKO0FBbkNELGdEQW1DQyJ9