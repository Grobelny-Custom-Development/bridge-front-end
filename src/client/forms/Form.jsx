import React from 'react';
import { useFormik } from 'formik';
import FormContext from './FormContext';
import isFunction from '../utility/functionHelpers.js';

const Form = ({
  initialValues = {}, validationSchema, onSubmit, children, className,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (onSubmit) {
        await Promise.resolve(onSubmit(values));
        setSubmitting(false);
      }
    },
  });

  return (
    <FormContext.Provider value={{ formik }}>
      <form onSubmit={formik.handleSubmit} className={className}>
        {isFunction(children) ? children(formik) : children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;