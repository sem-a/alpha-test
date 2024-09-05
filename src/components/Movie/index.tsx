import React from "react";
import styles from "./index.module.scss";
import { H3 } from "../title";
import { DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Button } from "../form-item";
import { useDispatch } from "react-redux";
import { deleteMovie, likeMovie } from "../../store/moviesSlice";
import { MovieType } from "../../types";

interface MovieProps {
    movie: MovieType;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteMovie(movie.id));
    };

    const handleLike = () => {
        dispatch(likeMovie(movie.id));
    };

    return (
        <div className={styles.movie}>
            <div className={styles.movieContainer}>
                <div className={styles.movieImage}>
                    <img src={movie.poster.url} alt={movie.name} />
                </div>
                <div className={styles.movieBody}>
                    <div className={styles.movieTitle}>
                        <div className={styles.year}>
                            <p>{movie.year}</p>
                        </div>
                        <H3>{movie.name}</H3>
                    </div>
                    <div className={styles.movieRating}></div>
                    <div className={styles.movieGenres}>
                        {movie.genres[0].name}
                    </div>
                    <div className={styles.movieDescription}>
                        {movie.description.split(" ").slice(0, 14).join(" ")}
                        {movie.description.split("").length > 14 ? "..." : ""}
                    </div>
                    <div className={styles.movieButton}>
                        <Button onClick={handleLike}>
                            {movie.likes ? <HeartFilled /> : <HeartOutlined />}
                        </Button>
                        <Button onClick={handleDelete}>
                            <DeleteOutlined />
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
