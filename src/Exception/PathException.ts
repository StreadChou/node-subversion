export class PathException extends Error {

    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}