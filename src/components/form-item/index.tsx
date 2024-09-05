import React from "react";
import styles from "./index.module.scss";

type PropsButton = {
    children: React.ReactNode;
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type PropsInput = {
    placeholder?: string | undefined;
    id: string | undefined;
    name: string | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

type PropsFormItem = {
    children: React.ReactNode;
};

type PropsLabel = {
    children: React.ReactNode;
    htmlFor: string | undefined;
};

type PropsForm = {
    children: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
};

type PropsTextArea = {
    id: string | undefined;
    name: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

type PropsRangeInput = {
    id: string | undefined;
    name: string | undefined;
    min: string | number | undefined;
    max: string | number | undefined;
    step: string | number | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

type PropsSelect = {
    options: {
        value: string;
        label: string;
    }[];
    id: string | undefined;
    name: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

export const Button: React.FC<PropsButton> = ({ children, type, onClick }) => {
    return (
        <button className={styles.customButton} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export const Input: React.FC<PropsInput> = ({
    placeholder,
    id,
    name,
    type = "text",
    onChange,
    value,
}) => {
    return (
        <input
            placeholder={placeholder}
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            className={styles.customInput}
        />
    );
};

export const RangeInput: React.FC<PropsRangeInput> = ({
    id,
    name,
    min,
    max,
    step,
    value,
    onChange
}) => {
    return (
        <input
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
        />
    );
};

export const TextArea: React.FC<PropsTextArea> = ({ id, name, onChange, value }) => {
    return (
        <textarea
            name={name}
            id={id}
            className={styles.customTextArea}
            onChange={onChange}
            value={value}
        ></textarea>
    );
};

export const Label: React.FC<PropsLabel> = ({ children, htmlFor }) => {
    return <label htmlFor={htmlFor}>{children}</label>;
};

export const FormItem: React.FC<PropsFormItem> = ({ children }) => {
    return <div className={styles.formItem}>{children}</div>;
};

export const Form: React.FC<PropsForm> = ({ children, onSubmit }) => {
    return <form onSubmit={onSubmit}>{children}</form>;
};

export const Select: React.FC<PropsSelect> = ({ options, id, name, value, onChange }) => {
    return (
        <select id={id} name={name} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
