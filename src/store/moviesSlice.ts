import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "../types";

interface AddMoviePayload {
    movie: MovieType;
}

interface MoviesState {
    movies: MovieType[];
}

const initialState: MoviesState = {
    movies: [],
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieType[]>) => {
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
        addMovie: (state, action: PayloadAction<AddMoviePayload>) => {
            state.movies.unshift(action.payload.movie);
        },
    },
});

export const { setMovies, deleteMovie, likeMovie, addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
