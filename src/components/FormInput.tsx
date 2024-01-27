import React, { useState, InputHTMLAttributes } from 'react';
import './FormInput.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    errorMessage?: string;
    label: string;
    required?: boolean;
    pattern?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<InputProps> = (props: InputProps) => {
    const [focused, setFocused] = useState(false);

    const { label, errorMessage, onChange, ...otherInputProps } =
        props;

    return (
        <div className={`formInput ${focused ? 'focused' : ''}`}>
            <label>{label}</label>
            <input
                {...otherInputProps}
                onChange={onChange}
                required
                onBlur={() => setFocused(true)}
                onFocus={() => otherInputProps.name === 'OrderTime' && setFocused(true)}
            ></input>
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;