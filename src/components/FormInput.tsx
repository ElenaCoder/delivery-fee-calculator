import React, { useState } from 'react';
import './FormInput.css';

const FormInput: React.FC = (props) => {
    const [focused, setFocused] = useState(false);

    const { label, errorMessage, onChange, id, ...otherInputProps } =
        props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input
                {...otherInputProps}
                onChange={onChange}
                required
                onBlur={handleFocus}
                onFocus={() => otherInputProps.name === 'OrderTime' && setFocused(true)}
                focused={focused.toString()}
            ></input>
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;