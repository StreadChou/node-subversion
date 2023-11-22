/// <reference types="node" />
import { ExecException } from "child_process";
export type TypeExecFunction = (cmd: string) => Promise<string>;
export declare function ExecWithEnUs(cmd: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): Promise<string>;
