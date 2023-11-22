import {exec, ExecException, ExecSyncOptionsWithBufferEncoding} from "child_process";

export type TypeExecFunction = (cmd: string) => Promise<string>;

export async function ExecWithEnUs(cmd: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): Promise<string> {
    console.log(cmd);
    const options: ExecSyncOptionsWithBufferEncoding = {
        env: {
            LANG: 'en_US.UTF-8'
        },
        stdio: "ignore"
    };
    return new Promise((resolve, reject) => {
        exec(cmd, options, (error, stdout, stderr) => {
            if (callback) callback(error, stdout, stderr);

            if (error) return reject(error)
            if (stderr) return resolve(stderr);
            return resolve(stdout);
        })
    })
}