import {Field, Form, Formik} from "formik";

export const InnerForm = () => {
    return (
        <Formik
            initialValues={{ innerValue: '' }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <Field name="innerValue" />
                    <button type="submit">Submit Inner Form</button>
                </Form>
            )}
        </Formik>
    );
};