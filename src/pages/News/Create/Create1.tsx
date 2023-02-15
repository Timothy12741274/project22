import React, {ChangeEvent, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";

const Create1 = () => {
    const [photos, setPhotos] = useState([]);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setPhotos(event.target.files);
    };
    return (
        <div>
            <Formik

                initialValues={{
                    main_photo: null,
                    tag: '',
                    name: '',
                    title: '',
                    content: []
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);

                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>main_photo</label>
                        <Field type="file" name="main_photo" placeholder={"main_photo"}/>
                        <ErrorMessage name="main_photo" component="div" />

                        <Field type="text" name="tag" placeholder={"tag"} />
                        <ErrorMessage name="tag" component="div" />

                        <Field type="text" name="name" placeholder={"name"}/>
                        <ErrorMessage name="name" component="div" />

                        <Field type="text" name="title" placeholder={"title"}/>
                        <ErrorMessage name="title" component="div" />
                        <label>content</label>
                        <Field name={"content"}>
                            {({field, form}: any) => {
                                return <div>
                                    {/*<div>{form.values.content.map((el:any)=><div>{el}</div>)}</div>*/}
                                <input type="text" {...field} />
                                <input type="file" onChange={(event) => {
                                    // @ts-ignore
                                    form.setFieldValue('content', [...form.values.content, event.currentTarget.files[0]]);
                                }} />
                                </div>
                            }}
                        </Field>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
                {/*<input
                    type={"file"}
                    multiple
                    onChange={handleFileUpload}
                    accept="image/*"
                    placeholder={"select"}
                />*/}
        </div>
    );
};

export default Create1;