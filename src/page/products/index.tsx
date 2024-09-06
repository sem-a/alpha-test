import React from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import CardsList from "../../components/movie-list";
import styles from './index.module.scss';


function Products() {
    return (
        <div className={styles.products}>
            <Header />
            <Container>
                <CardsList />
            </Container>
        </div>
    );
}

export default Products;
