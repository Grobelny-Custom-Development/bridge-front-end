import React from 'react';
import FormContext from './FormContext';
import Input from '../bridge-components/Input.jsx'


const Field = ({ formik, name, label, placeholder, type }) => {

    const context = React.useContext(FormContext);
    const frmk = formik || context.formik;

    return(
      <div className="control">
        <Input type={type} label={label} name={name} formik={frmk} placeholder={placeholder}/>
      </div>
    )
}

export default Field;