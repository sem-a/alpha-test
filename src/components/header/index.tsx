import React from "react";
import styles from "./index.module.scss";
import { Container } from "../container";
import { Link } from "react-router-dom";
import { PATHS } from "../../paths";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerFlex}>
                    <h2 className={styles.logo}>ProductTest</h2>
                    <ul className={styles.menu}>
                        <Link to={PATHS.home}><li className={styles.menuItem}>Главная</li></Link>
                        <Link to={PATHS.products}><li className={styles.menuItem}>Продукты</li></Link>
                        <Link to={PATHS.createProducts}><li className={styles.menuItem}>Создать продукт</li></Link>
                    </ul>
                </div>
            </Container>
        </header>
    );
};
