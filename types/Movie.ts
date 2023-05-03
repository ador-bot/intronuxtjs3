export type Movie = {
    id: number,
    title: string,
    genres: {
        id: number,
        name: string
    }[],
    release_date: string,
    runtime: number,
    overview: string,
    poster_path: string
}