import React from "react";
import styles from "./index.module.scss";

type PropsButton = {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type PropsInput = {
    placeholder?: string | undefined;
    id: string | undefined;
    name: string | undefined;
};

type PropsFormItem = {
    children: React.ReactNode;
};

type PropsLabel = {
    children: React.ReactNode;
    htmlFor: string | undefined;
};

export const Button: React.FC<PropsButton> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

export const Input: React.FC<PropsInput> = ({ placeholder, id, name }) => {
    return (
        <input
            placeholder={placeholder}
            id={id}
            name={name}
            className={styles.customInput}
        />
    );
};

export const Label: React.FC<PropsLabel> = ({ children, htmlFor }) => {
    return <label htmlFor={htmlFor}>{children}</label>;
};

export const FormItem: React.FC<PropsFormItem> = ({ children }) => {
    return <div className={styles.formItem}>{children}</div>;
};
