import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieRating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface MoviePoster {
    url: string;
    previewUrl: string;
}

interface MovieGenres {
    name: string;
}

interface Movie {
    id: number;
    name: string;
    year: number;
    description: string;
    rating: MovieRating;
    movieLenght: number;
    poster: MoviePoster;
    genres: MovieGenres[];
    likes: boolean;
}

interface MovieResponse {
    docs: Movie[];
}

interface MoviesState {
    movies: Movie[];
}

const initialState: MoviesState = {
    movies: [],
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload.map((movie) => ({
                ...movie,
                likes: false,
            }));
        },
        deleteMovie: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.filter(
                (movie) => movie.id !== action.payload
            );
        },
        likeMovie: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.map((movie) => {
                if (movie.id === action.payload) {
                    return {
                        ...movie,
                        likes: !movie.likes,
                    };
                }
                return movie;
            });
        },
    },
});

export const { setMovies, deleteMovie, likeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
