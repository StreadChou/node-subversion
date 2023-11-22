"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecWithEnUs = void 0;
const child_process_1 = require("child_process");
async function ExecWithEnUs(cmd, callback) {
    console.log(cmd);
    const options = {
        env: {
            LANG: 'en_US.UTF-8'
        },
        stdio: "ignore"
    };
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(cmd, options, (error, stdout, stderr) => {
            if (callback)
                callback(error, stdout, stderr);
            if (error)
                return reject(error);
            if (stderr)
                return resolve(stderr);
            return resolve(stdout);
        });
    });
}
exports.ExecWithEnUs = ExecWithEnUs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY0hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXIvRXhlY0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBcUY7QUFJOUUsS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFXLEVBQUUsUUFBZ0Y7SUFDNUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixNQUFNLE9BQU8sR0FBc0M7UUFDL0MsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLGFBQWE7U0FDdEI7UUFDRCxLQUFLLEVBQUUsUUFBUTtLQUNsQixDQUFDO0lBQ0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNuQyxJQUFBLG9CQUFJLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekMsSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTlDLElBQUksS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvQixJQUFJLE1BQU07Z0JBQUUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFqQkQsb0NBaUJDIn0=