import React from 'react';
import {Field, Form, Formik} from "formik";
import axios from "axios";

const Create2 = () => {
    return (
        <div>
            <Formik initialValues={{tag: '', name: '', title: '', content: [], main_photo: null, category: ''}}
                    onSubmit={(values)=>{
                        //axios.post('http://localhost:5000/api/news/add', )
                        console.log(values)
                    }}
                    >
                {(isSubmiting)=>{
                    return <Form>
                        <label>tag</label>
                    <Field name={"tag"} type={"text"}/>
                        <label>name</label>
                    <Field name={"name"} type={"text"}/>
                        <label>title</label>
                    <Field name={"title"} type={"text"}/>
                        <label>category</label>
                    <Field name={"category"} type={"text"}/>
                        <label>main_photo</label>
                    <Field name={"main_photo"} type={"file"}/>
                        <label>content</label>
                    <Field name={"content"}>
                {(formikProps:any)=>{
                    const clickH = (e:any ) => {
                        e.preventDefault()
                    formikProps.form.setFieldValue('content',

                    [...formikProps.form.values.content,
                    formikProps.field.values.newTextV ?
                {type: "paragraph", value: formikProps.field.values.newTextV} :
                {type: "photo", value: formikProps.field.values.newPhotoV}
                    ]

                    )
                }
                    return <Form>
                    <Field name={"newTextV"} type={"text"}/>
                    <Field name={"newPhotoV"} type={"file"} accept={"image/*"}/>
                    <button onClick={(e)=>clickH(e)}>add</button>
                    </Form>
                }}
                    </Field>
                    <button type={"submit"} /*disabled={isSubmiting}*/>
                        Submit
                    </button>
                    </Form>
                }}</Formik>
        </div>
    );
};

export default Create2;