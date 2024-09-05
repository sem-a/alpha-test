import React, { FormEvent, useState } from "react";
import styles from "./index.module.scss";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { H2 } from "../../components/title";
import {
    Button,
    Form,
    FormItem,
    Input,
    Label,
    RangeInput,
    Select,
    TextArea,
} from "../../components/form-item";
import { MovieType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/moviesSlice";
import { RootState } from "../../store/store";

const ProductAdd = () => {
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
        genres: [
            {name: 'драма'}
        ],
        likes: false,
    };

    const dispatch = useDispatch();

    const movies = useSelector((state: RootState) => state.movies.movies);

    const lastMovieId = movies.length > 0 ? movies[movies.length - 1].id : 0;
    const newMovieId = lastMovieId + 1;

    const [formData, setFormData] = useState<MovieType>({
        ...dataMovieNull,
        id: newMovieId,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addMovie({ movie: formData }));
        setFormData(dataMovieNull);
    };

    return (
        <div className={styles.productAdd}>
            <Header />
            <Container>
                <div style={{ marginTop: "121px" }}>
                    <Form onSubmit={handleSubmit}>
                        <H2>Добавить фильм</H2>
                        <FormItem>
                            <Label htmlFor="name">Название</Label>
                            <Input
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </FormItem>
                        <FormItem>
                            <Label htmlFor="year">Год</Label>
                            <Input
                                name="year"
                                id="year"
                                type="number"
                                value={formData.year}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        year: parseInt(e.target.value),
                                    })
                                }
                            />
                        </FormItem>
                        <FormItem>
                            <Label htmlFor="desc">Описание</Label>
                            <TextArea
                                id="desc"
                                name="desc"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </FormItem>
                        <FormItem>
                            <Label htmlFor="rating">Рейтинг</Label>
                            <RangeInput
                                id="rating"
                                name="rating"
                                min={0}
                                max={10}
                                step={0.1}
                                value={formData.rating.kp}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        rating: {
                                            ...formData.rating,
                                            kp: parseInt(e.target.value),
                                        },
                                    })
                                }
                            />
                        </FormItem>
                        <FormItem>
                            <Label htmlFor="lenght">Длительность</Label>
                            <Input
                                name="lenght"
                                id="lenght"
                                type="number"
                                value={formData.movieLenght}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        movieLenght: parseInt(e.target.value),
                                    })
                                }
                            />
                        </FormItem>
                        <FormItem>
                            <Label htmlFor="poster">Постер(ссылка)</Label>
                            <Input
                                name="poster"
                                id="poster"
                                value={formData.poster.url}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        poster: {
                                            url: e.target.value,
                                            previewUrl: e.target.value,
                                        },
                                    })
                                }
                            />
                        </FormItem>
                        {/* <FormItem>
                            <Label htmlFor="genres">Жанр</Label>
                            <Select
                                name="genres"
                                id="genres"
                                options={[
                                    { value: "action", label: "Боевик" },
                                    { value: "comedy", label: "Комедия" },
                                    { value: "drama", label: "Драма" },
                                ]}
                                value={formData.genres.map(
                                    (genre) => genre.name
                                )}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        genres: [{ name: e.target.value }],
                                    })
                                }
                            />
                        </FormItem> */}
                        <FormItem>
                            <Button type="submit">Добавить</Button>
                        </FormItem>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default ProductAdd;
