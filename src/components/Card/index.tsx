import React from "react";
import styles from "./index.module.scss";
import { H3 } from "../Title";
import { DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Button } from "../FormItems";

interface CardProps {
    title: string;
    url: string;
    likes: boolean;
}

const Card: React.FC<CardProps> = ({ title, url, likes }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImg}>
                    <img
                        src={url}
                        alt="img"
                    />
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>
                        <H3>{title}</H3>
                    </div>
                </div>
                {likes ? <HeartFilled className={styles.cardIconLike} /> : <HeartOutlined className={styles.cardIconLike} />}
                <div className={styles.cardIconDelete}>
                    <Button><DeleteOutlined />Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
