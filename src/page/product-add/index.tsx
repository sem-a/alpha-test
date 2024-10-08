import React, { FormEvent, useState } from "react";
import styles from "./index.module.scss";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { H2 } from "../../components/title";
import {
    Button,
    Form,
    FormFlex,
    FormItem,
    Input,
    Label,
    RangeInput,
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
        movieLength: 0,
        poster: {
            url: "",
            previewUrl: "",
        },
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
        if (
            !formData.name ||
            !formData.year ||
            !formData.description ||
            !formData.movieLength
        ) {
            alert("Пожалуйста, заполните все обязательные поля");
            return;
        }
        const currentYear = new Date().getFullYear();
        if (formData.year < 1800 || formData.year > currentYear) {
            alert("Год должен быть от 1800 до текущего года");
            return;
        }
        if (formData.movieLength <= 0) {
            alert("Длительность фильма должна быть больше 0");
            return;
        }
        dispatch(addMovie({ movie: formData }));
        setFormData(dataMovieNull);
    };

    return (
        <div className={styles.productAdd}>
            <Header />
            <Container>
                <div
                    style={{
                        marginTop: "121px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Form onSubmit={handleSubmit}>
                        <H2>Добавить фильм</H2>
                        <FormFlex>
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
                        </FormFlex>
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
                                value={formData.movieLength}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        movieLength: e.target.value ? parseInt(e.target.value) : 0,
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
