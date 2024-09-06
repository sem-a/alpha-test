import React, { useState } from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import styles from "./index.module.scss";
import { MovieType } from "../../types";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { H2, H3 } from "../../components/title";
import { B, P } from "../../components/text";
import { Button } from "../../components/form-item";

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
        movieLength: 0,
        poster: {
            url: "",
            previewUrl: "",
        },
        likes: false,
    };

    const { id } = useParams();
    const movieId = id ? parseInt(id) : undefined;

    const movies = useSelector((state: RootState) => state.movies.movies);
    let movieTemp = movies.find((m) => m.id === movieId);
    if (!movieTemp) {
        movieTemp = dataMovieNull;
    }

    const [movie] = useState<MovieType>(movieTemp);

    const hours = Math.floor(movie.movieLength / 60);
    const minutes = movie.movieLength % 60;

    return (
        <div className={styles.products}>
            <Header />
            <Container>
                <div className={styles.movieDetails}>
                    <div className={styles.movieImage}>
                        <img src={movie.poster.url} alt={movie.name} />
                    </div>
                    <div className={styles.movieInfo}>
                        <div className={styles.movieItem}>
                            <div className={styles.movieTitle}>
                                <div className={styles.year}>
                                    <p>{movie.year}</p>
                                </div>
                                <H2>{movie.name}</H2>
                            </div>
                        </div>
                        <div className={styles.movieItem}>
                            <P>{movie.description}</P>
                        </div>
                        <div className={styles.movieItem}>
                            <div className={styles.rating}>
                                <H3>Рейтинг</H3>
                                <P>
                                    <B>KP:</B> {movie.rating.kp}
                                </P>
                                <P>
                                    <B>IMDB:</B> {movie.rating.imdb}
                                </P>
                                <P>
                                    <B>Film Critics:</B>{" "}
                                    {movie.rating.filmCritics}
                                </P>
                                <P>
                                    <B>Russian Film Critics:</B>{" "}
                                    {movie.rating.russianFilmCritics}
                                </P>
                                <P>
                                    <B>Await:</B> {movie.rating.await}
                                </P>
                            </div>
                        </div>
                        <div className={styles.movieItem}>
                            <div className={styles.duration}>
                                <H3>Продолжительность</H3>
                                <P>{`${hours} ч ${minutes} мин`}</P>
                            </div>
                        </div>
                    </div>
                    <div className={styles.movieButton}>
                        <Link to={`/products`}>
                            <Button>
                                Назад
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Product;
