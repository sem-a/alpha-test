import React from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import styles from './index.module.scss';
import { MovieType } from "../../types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";


const Product = () => {

    const dataMovieNull: MovieType = {
        id: 0,
        name: "",
        year: 0,
        description: "",
        rating: {
            kp: 0,
            imdb: 0,
            filmCritics: 0,
            russianFilmCritics: 0,
            await: 0,
        },
        movieLenght: 0,
        poster: {
            url: "",
            previewUrl: "",
        },
        genres: [{ name: "драма" }],
        likes: false,
    };

    const { id } = useParams();
    const movieId = id ? parseInt(id) : undefined;

    const dispatch = useDispatch();

    const movies = useSelector((state: RootState) => state.movies.movies);
    let movie = movies.find((m) => m.id === movieId);
    if (!movie) {movie = dataMovieNull}

    return (
        <div className={styles.products}>
            <Header />
            <Container>
                <div className={styles.movieDetails}>
                    <div className={styles.movieImage}>
                        <img src={movie.poster.url} alt={movie.name} />
                    </div>
                    <div className={styles.movieInfo}>
                        <h2>{movie.name} ({movie.year})</h2>
                        <p>{movie.description}</p>
                        <div className={styles.rating}>
                            <p>KP: {movie.rating.kp}</p>
                            <p>IMDB: {movie.rating.imdb}</p>
                            <p>Film Critics: {movie.rating.filmCritics}</p>
                            <p>Russian Film Critics: {movie.rating.russianFilmCritics}</p>
                            <p>Await: {movie.rating.await}</p>
                        </div>
                        <p>Duration: {movie.movieLenght} min</p>
                        <div className={styles.genres}>
                            Genres: {movie.genres.map(genre => genre.name).join(', ')}
                        </div>
                        <div className={styles.likes}>
                            Likes: {movie.likes ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Product;