import {GiphyService} from "./GiphyService";
import {RetrieveGifsOptions} from "../interfaces/Retrieve";
import {PixabayService} from "./PixabayService";
import {Gif} from "../structures/Gif";

export class GifService {
    private giphyService = new GiphyService();
    private pixabayService = new PixabayService();

    async getGifs(options: RetrieveGifsOptions): Promise<Gif[]> {
        const giphyData: Gif[] = await this.giphyService.getMultiple(options);
        const pixabayData: Gif[] = await this.pixabayService.getMultiple(options);
        return [
            ...giphyData,
            ...pixabayData
        ];
    }
}
