import React from "react";
import styles from "./index.module.scss";
import { Container } from "../Container";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerFlex}>
                    <h2 className={styles.logo}>ProductTest</h2>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>Продукты</li>
                        <li className={styles.menuItem}>Продукты</li>
                        <li className={styles.menuItem}>Продукты</li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};
