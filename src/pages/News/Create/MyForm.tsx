import React, {useEffect, useState} from 'react';
import { Formik, Form, Field } from 'formik';
import {FileInput} from "./MyForm/FileInput/FileInput";
import {TextArea} from "./MyForm/TextArea/TextArea";
import ContentForm from "./MyForm/ContentForm/ContentForm";

const MyForm = ({setValues}:any) => {
    return (
        <Formik
            initialValues={{ name: '', tag: '', title: '', main_photo: '', category: '' }}
            onSubmit={(values, actions) => {
                // Добавляем объект со значением в массив
                // @ts-ignore
                //values.content.push({type: whatToAdd, value: values.value });
                setValues(values)
                //actions.setSubmitting(false);
            }}
            /*onSubmit={(values, { setSubmitting, resetForm }) => {
                setInnerFormValues(values);
                setSubmitting(false);
                resetForm();
            }}*/
        >
            {({ values, isSubmitting, handleSubmit }) => (
                <Form>
                    <Field type={"text"} name={"name"} placeholder={"Name"}/>
                    <Field type={"text"} name={"tag"} placeholder={"Tag"}/>
                    <label>Main photo</label>
                    <FileInput name={"main_photo"}/>
                    <label>Title</label>
                    <TextArea name={"title"}/>
                    <Field type={"text"} name={"category"} placeholder={"Category"}/>
                    {/*<ContentForm content={values.content} handleSubmit={handleSubmit}/>*/}
                    <button type={"submit"}>submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;