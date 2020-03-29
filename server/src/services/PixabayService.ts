import {RetrieveGifsOptions, RetrieveMultiple} from "../interfaces/Retrieve";
import fetch from "node-fetch";
import {Gif} from "../structures/Gif";

export class PixabayService implements RetrieveMultiple {
    readonly API_URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}`;

    private mapToGif({id, webformatURL}): Gif {
        return {
            id,
            url: webformatURL
        }
    }

    async getMultiple(options: RetrieveGifsOptions): Promise<Gif[]> {
        const {query} = options;
        return fetch(this.API_URL + `&q=${query}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(res => res.hits.map(this.mapToGif));
    }
}
