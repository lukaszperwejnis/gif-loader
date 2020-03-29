import {Controller} from "./Controller";
import {NextFunction, Response, Request} from "express";
import {GifService} from "../services/GifService";
import {Gif} from "../structures/Gif";

export class GifController extends Controller {
    private gifService = new GifService();
    constructor() {
        super();
        this.getMultiple = this.getMultiple.bind(this);
    }

    public async getMultiple(req: Request, res: Response, next: NextFunction) {
        try {
            const docs: Gif[] = await this.gifService.getGifs(req.query);
            return this.ok(res, docs);
        } catch (error) {
            next(error);
        }
    }
}

