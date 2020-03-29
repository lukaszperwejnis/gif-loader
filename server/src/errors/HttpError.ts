export class HttpError extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string, errors?: any) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
