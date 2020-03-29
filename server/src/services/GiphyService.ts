import fetch from 'node-fetch';
import {RetrieveMultiple, RetrieveGifsOptions} from "../interfaces/Retrieve";
import {Gif} from "../structures/Gif";

export class GiphyService implements RetrieveMultiple {
    readonly API_URL = `http://api.giphy.com/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}`;

    private mapToGif({id, images}): Gif {
        return {
            id,
            url: images.downsized_large.url
        }
    }

    async getMultiple(options: RetrieveGifsOptions): Promise<Gif[]> {
        const {query} = options;
        return fetch(this.API_URL + `&q=${query}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(res => res.data.map(this.mapToGif))
    }
}
