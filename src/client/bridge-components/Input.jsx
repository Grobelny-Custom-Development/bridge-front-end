
import React from "react";
import styled from '@emotion/styled';

import FormContext from '../forms/FormContext';
import InputError from '../helpers/InputError.jsx';


const InputStyled = styled.label`

p{
    display: inline-block;
    text-transform: uppercase;
}

.active{
    background-color: red;
    color: white;
    line-height: 50px;
}

`;

const Input = ({formik, type, name, placeholder, disabled, label, onChange, onBlur}) => {
    const context = React.useContext(FormContext);
    const frmk = formik || context.formik;

    const handleChange = onChange || frmk.handleChange;
    const handleBlur = onBlur || frmk.handleBlur;
    const touched = frmk.touched[name];
    const error = frmk.errors[name];

    const inputError = (touched && error) ? error : '';
    return(
        <InputStyled htmlFor={name}>
        <p>{label}</p>
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled || frmk.isSubmitting}
        value={frmk.values[name]}
        />
        <InputError text={inputError} />
        </InputStyled>
    )
}

Input.defaultProps = {
    type: 'text',
    name: ' ',
    label: '',
    placeholder: '',
    value: '',
    formik: null,
  };

export default Input;