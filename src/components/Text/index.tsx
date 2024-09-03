import React from "react";
import styles from "./index.module.scss";

type Props = {
    children: React.ReactNode;
};

export const P: React.FC<Props> = ({ children }) => {
    return <p className={styles.text}>{children}</p>;
};
