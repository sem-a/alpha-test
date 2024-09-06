import React from "react";
import { Header } from "./components/header";
import { Container } from "./components/container";
import CardsList from "./components/movie-list";
import styles from './index.module.scss';
import { H2C } from "./components/title";
import { PC } from "./components/text";

function App() {
    return (
        <div className="App">
            <Header />
            <div className={styles.main}>
                <div className={styles.mainItems}>
                    <H2C>Добро пожаловать на сайт Тестового задания!</H2C>
                    <PC>Он делался без особого дизайнерского мастерства, другие более дизайнерские работы можно посмотреть по <a href="https://sem-a.github.io/as/">ссылке</a></PC>
                    <PC>Также на сайте отствует полный адаптив(есть резиновая верстка до определенного момента), так как этого не требовало тех. задание, а сроки сжаты</PC>
                </div>
            </div>
        </div>
    );
}

export default App;
