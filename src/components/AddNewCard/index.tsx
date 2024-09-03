import React from "react";
import styles from "./index.module.scss";
import { H2 } from "../Title";
import { FormItem, Input, Label } from "../FormItems";

const AddNewCard = () => {
    return (
        <div className={styles.form}>
            <div className={styles.formContainer}>
                <div className={styles.formTitle}>
                    <H2>Добавить новую карточку</H2>
                </div>
                <FormItem>
                    <Label htmlFor="title">Название</Label>
                    <Input id="title" name="title" />
                </FormItem>
                <FormItem>
                    <Label htmlFor="description">Название</Label>
                    <Input id="description" name="description" />
                </FormItem>
            </div>
        </div>
    );
};

export default AddNewCard;
