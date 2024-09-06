import React from "react";
import styles from "./index.module.scss";

type Props = {
    children: React.ReactNode
}

export const H1: React.FC<Props> = ( {children} ) => {
    return <h1 className={styles.title}>{children}</h1>
}

export const H2: React.FC<Props> = ( {children} ) => {
    return <h2 className={styles.title}>{children}</h2>;
};
export const H2C: React.FC<Props> = ( {children} ) => {
    return <h2 style={{textAlign:"center"}} className={styles.title}>{children}</h2>;
};

export const H3: React.FC<Props> = ( {children} ) => {
    return <h3 className={styles.title}>{children}</h3>;
};