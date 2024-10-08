import React from "react";
import styles from "./index.module.scss";

type Props = {
    children: React.ReactNode;
};

export const P: React.FC<Props> = ({ children }) => {
    return <p className={styles.text}>{children}</p>;
};

export const PC: React.FC<Props> = ({ children }) => {
    return <p style={{textAlign: "center"}} className={styles.text}>{children}</p>;
};

export const B: React.FC<Props> = ({ children }) => {
    return <span className={styles.bold}>{children}</span>;
};
