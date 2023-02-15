export const a = 1
/*
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const InnerForm = ({ pushValue }) => (
    <Formik
        initialValues={{ innerField: '' }}
        onSubmit={(values, actions) => {
            pushValue(values.innerField);
            actions.resetForm();
            actions.setSubmitting(false);
        }}
    >
        {({ isSubmitting }) => (
            <Form>
                <Field name="innerField" />
                <ErrorMessage name="innerField" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    Add Value
                </button>
            </Form>
        )}
    </Formik>
);

const OuterForm = () => {
    const [valuesArray, setValuesArray] = useState([]);

    const pushValue = value => setValuesArray([...valuesArray, value]);

    return (
        <Formik
            initialValues={{ outerField: '', valuesArray: [] }}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {({ values, isSubmitting }) => (
                <Form>
                    <Field name="outerField" />
                    <InnerForm pushValue={pushValue} />
                    <br />
                    <br />
                    <ul>
                        {valuesArray.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                    <br />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default OuterForm;*/
