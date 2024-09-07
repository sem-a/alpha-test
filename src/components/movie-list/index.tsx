import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Movie from "../movie";
import styles from "./index.module.scss";
import { MovieType } from "../../types";

const MovieList: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies);
    const [visibleMovies, setVisibleMovies] = useState(6);
    const [filter, setFilter] = useState("all");
    const [activeFilter, setActiveFilter] = useState("all");
    const [sortByYear, setSortByYear] = useState(false);

    const showMoreMovies = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
    };

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter);
        setActiveFilter(selectedFilter);
        setSortByYear(false);
    };

    const toggleSortByYear = () => {
        setSortByYear((prevSortByYear) => !prevSortByYear);
    };

    const filteredMovies = filter === "all" ? movies : movies.filter((movie) => movie.likes);

    const sortedMovies = sortByYear
        ? [...filteredMovies].sort((a, b) => a.year - b.year)
        : filteredMovies;

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
                <button onClick={toggleSortByYear} className={sortByYear ? styles.activeFilter : ""}>
                    Фильтр по году
                </button>
            </div>
            {sortedMovies && sortedMovies.length === 0 ? (
                <div>Ничего не найдено</div>
            ) : (
                <>
                    <div className={styles.cardList}>
                        {sortedMovies && sortedMovies.length > 0 && sortedMovies.slice(0, visibleMovies).map((movie: MovieType) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </div>
                    {visibleMovies < (sortedMovies && sortedMovies.length) && (
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