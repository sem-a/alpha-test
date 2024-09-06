import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "../types";
import { API_FETCH, API_KEY } from "../const";

interface AddMoviePayload {
    movie: MovieType;
}

interface UpdateMoviePayload {
    id: number;
    updatedMovie: Partial<MovieType>;
}

interface MoviesState {
    movies: MovieType[];
}

const initialState: MoviesState = {
    movies: [],
};

export const fetchMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch(API_FETCH, {
            headers: {
                "X-API-KEY": API_KEY,
                accept: "application/json",
            },
        });
        const data = await response.json();
        return data.docs; // Предположим, что данные приходят в виде массива объектов
    }
);

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
        updateMovie: (state, action: PayloadAction<UpdateMoviePayload>) => {
            const { id, updatedMovie } = action.payload;
            state.movies = state.movies.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        ...updatedMovie,
                    };
                }
                return movie;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
            state.movies = action.payload.map((movie: MovieType) => ({
                ...movie,
                likes: false,
            }));
        });
    },
});

export const { setMovies, deleteMovie, likeMovie, addMovie, updateMovie } = moviesSlice.actions;

export default moviesSlice.reducer;