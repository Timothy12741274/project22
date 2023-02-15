import {Field, Form, Formik} from "formik";
import MyForm from "../MyForm";
import React, {useState} from "react";

const OuterForm = () => {
    let [whatToAdd, setWhatToAdd] = useState('paragraph')
    const h1 = () => {
        setWhatToAdd('paragraph')
    }
    const h2 = () => {
        setWhatToAdd('photo')
    }
    return <Formik
        initialValues={{ content: [] }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }}
    >
        {({ values, handleSubmit, isSubmitting , setFieldValue}) => (
            <Form /*onSubmit={handleSubmit}*/>
                {/*<Field type="text" name="outerField" />*/}
                <span onClick={h1}>paragraph</span>
                <span onClick={h2}>photo</span>
                {/*<MyForm
                    whatToAdd={whatToAdd}
                    values={values}
                    setFieldValue={setFieldValue}
                />*/}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
};

export default OuterForm;