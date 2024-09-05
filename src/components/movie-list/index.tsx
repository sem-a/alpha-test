import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../store/moviesSlice";
import { RootState, AppDispatch } from "../../store/store";
import Movie from "../movie";
import styles from "./index.module.scss";
import { API_FETCH, API_KEY } from "../../const";
import { MovieType } from "../../types";

const MovieList: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies);
    const dispatch = useDispatch<AppDispatch>();
    const [visibleMovies, setVisibleMovies] = useState(6);
    const [filter, setFilter] = useState("all");
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_FETCH, {
                    headers: {
                        "X-API-KEY": API_KEY,
                        accept: "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    dispatch(setMovies(data.docs));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [dispatch]);

    const showMoreMovies = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
    };

    const filteredMovies = filter === "all" ? movies : movies.filter((movie) => movie.likes);

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter);
        setActiveFilter(selectedFilter);
    };

    return (
        <div>
            <div className={styles.filterButton}>
                <button
                    onClick={() => handleFilterChange("all")}
                    className={activeFilter === "all" ? styles.activeFilter : ""}
                >
                    Все
                </button>
                <button
                    onClick={() => handleFilterChange("favorites")}
                    className={activeFilter === "favorites" ? styles.activeFilter : ""}
                >
                    Избранное
                </button>
            </div>
            {filteredMovies && filteredMovies.length === 0 ? (
                <div>Ничего не найдено</div>
            ) : (
                <>
                    <div className={styles.cardList}>
                        {filteredMovies && filteredMovies.length > 0 && filteredMovies.slice(0, visibleMovies).map((movie: MovieType) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </div>
                    {visibleMovies < (filteredMovies && filteredMovies.length) && (
                        <div className={styles.showMore}>
                            <button onClick={showMoreMovies}>Показать еще</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MovieList;