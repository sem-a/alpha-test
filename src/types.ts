export interface MovieType {
    id: number;
    name: string;
    year: number;
    description: string;
    rating: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    };
    movieLenght: number;
    poster: {
        url: string;
        previewUrl: string;
    };
    genres: {
        name: string;
    }[];
    likes: boolean;
}