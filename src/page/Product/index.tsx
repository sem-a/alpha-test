import React from "react";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import CardsList from "../../components/MovieList";
import styles from './index.module.scss';


function Product() {
    return (
        <div className={styles.products}>
            <Header />
            <Container>
                <CardsList />
            </Container>
        </div>
    );
}

export default Product;
