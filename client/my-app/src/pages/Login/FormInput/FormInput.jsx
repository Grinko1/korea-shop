import React from 'react';
import { useState } from 'react';
import './FormInput.scss'

const FormInput = (props) => {
    const {label, onChange, errorMessage, id, ...inputProps} = props
    const [focused, setFocused] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }
    return (
        <div className='formInput-container'>
            <label>{label}</label>
            <input 
            className='formInput-input'
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={ () => inputProps.name === 'confirmpassword' && setFocused(true)}
            focused={focused.toString()}
           
             />
             <span className='formInput-error'>{errorMessage}</span>
        </div>
    );
};

export default FormInput;