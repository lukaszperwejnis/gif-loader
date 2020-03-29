import {Router} from "express";
import {GifController} from "../controllers/GifController";

const gifController = new GifController();

export const GifRoutes: Router = Router();

GifRoutes.route('/')
    .get(gifController.getMultiple);
