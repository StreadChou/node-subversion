"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvnListCommand = void 0;
const AbstractSvnCommand_1 = require("../AbstractSvnCommand");
class SvnListCommand extends AbstractSvnCommand_1.AbstractSvnCommand {
    constructor(opts) {
        super(opts);
    }
    async run() {
        let cmd = `svn list ${this.opt.data.path} `;
        return this.appendCommandLineAndRun(cmd);
    }
}
exports.SvnListCommand = SvnListCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ZuTGlzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvU2hlbGwvTGlzdC9Tdm5MaXN0Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBeUQ7QUFJekQsTUFBYSxjQUFlLFNBQVEsdUNBQW1FO0lBRW5HLFlBQW1CLElBQTRFO1FBQzNGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUc7UUFDWixJQUFJLEdBQUcsR0FBRyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFSjtBQVhELHdDQVdDIn0=