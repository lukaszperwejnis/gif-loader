export type RetrieveGifsOptions = {
    query: string
}
export interface RetrieveMultiple {
    getMultiple(options: RetrieveGifsOptions): any
}
