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
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_FETCH, {
                headers: {
                    "X-API-KEY": API_KEY,
                    accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            return data.docs;
        } catch (error: any) {
            console.error("Error fetching movies:", error);
            return rejectWithValue({ errorMessage: error.message });
        }
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
            alert('Фильм добавлен!')
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
            alert('Данные успешно изменены!')
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