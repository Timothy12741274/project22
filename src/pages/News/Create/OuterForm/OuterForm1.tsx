export const a = 1
/*

import {Field, Form, Formik} from "formik";
import {useContext} from "react";
import {InnerForm} from "../MyForm/MyForm2";



const OuterForm = ({}:any) => {
    const { values: innerFormValues } = useContext(Formik.FormikContext);
    return (
        <Formik
            initialValues={{ outerValue: '', ...innerFormValues }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <InnerForm />
                    <Field name="outerValue" />
                    <button type="submit">Submit Outer Form</button>
                </Form>
            )}
        </Formik>
    );
};

export default OuterForm;*/
