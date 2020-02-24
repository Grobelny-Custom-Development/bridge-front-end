import React from "react";
import FormContext from './FormContext';
import Button from "../bridge-components/Button.jsx";



const FormButton = ({formik, text, type}) => {
  const context = React.useContext(FormContext);
  const frmk = formik || context.formik;
  return (
    <Button type={type} text={text} disabled={frmk && frmk.isSubmitting} />
  );
}

export default FormButton;