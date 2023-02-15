import React, {useState} from 'react';
import s from './Create.module.css'
import {Field, Form, Formik, FormikValues} from "formik";
import MyForm from "./MyForm";
import OuterForm from "./OuterForm/OuterForm";
import ContentForm from "./MyForm/ContentForm/ContentForm";
import axios from "axios";
import {v4} from "uuid";

const Create = () => {
    /*let [whatToAdd, setWhatToAdd] = useState('paragraph')
    const h1 = () => {
      setWhatToAdd('paragraph')
    }
    const h2 = () => {
      setWhatToAdd('photo')
    }*/
    const [content, setContent] = useState([])
    const [values, setValues] = useState({})
    //console.log(content)
    //console.log(values)

    const h1 = async () => {
        /*const formData = new FormData()
        const obj = {...values, content}

        const keys = Object.keys(obj)

        keys.map((k:string, index)=>{
            if(k === 'main_photo'){
                // @ts-ignore
                formData.append(k, obj[index], v4() + '.jpg')
            }
            if(k === 'content'){
                obj.
                obj[index].map((el:any)=>{

                    el.type === 'paragraph' ?
                        formData.append()
                        :

                formData.append()
            }
            // @ts-ignore
            if(typeof obj[index] === 'string') {
                // @ts-ignore
                formData.append(k, obj[index])
            }*/
        const formData = new FormData()
        const obj = {...values, content}
        const valuesKeys = Object.keys(values)
        valuesKeys.map((k:string, index)=>{
            // @ts-ignore
            formData.append(k, values[k])
        })
        /*content.map((el:any)=>{
            formData.append('content', el)
        })

        console.log(formData.get('name'))
        console.log(formData.get('main_photo'))
        // @ts-ignore
        console.log(...formData.get('content'))
        // @ts-ignore
        console.log(...formData)
        let a = 90*/
        const contentData = new FormData()
        content.map((el, index)=>{
            // @ts-ignore
            contentData.append(index.toString(), el.value)
        })
        // @ts-ignore
        console.log(...formData)
        // @ts-ignore
        console.log(...contentData)



      await axios.post('http://localhost:5000/api/news/add', formData /*{values: formData, content: contentData}*//*,
        {headers: {
            "Content-type": "multipart/form-data"
        }}*/ /*JSON.stringify({...values, content})*/)
    }
    const h2 = async () => {
        await axios.get('http://localhost:5000/api/news/all', {withCredentials: true})
    }
    const h3 = () => {
        const formData = new FormData()
      const parsedContent = JSON.stringify(content.map((el:any, index)=>{
          if(el.type === 'photo'){
              formData.append(index.toString(), el.value)
              return {...el, value: el.value.name}
              //console.log(el.value.name)
          } else {
              return el
          }
      }))
        formData.append('content', parsedContent)

        const valuesKeys = Object.keys(values)
        valuesKeys.map((k)=>{
                // @ts-ignore
                formData.append(k, values[k])
        })
        // @ts-ignore
        formData.append('main_photo_file_name', values['main_photo'].name)
        // @ts-ignore
        console.log(...formData)
        axios.post('http://localhost:5000/api/news/add', formData)
    }

    return (
        <div>
           {/* <Formik initialValues={{content: []}} onSubmit={(values:FormikValues)=>{
                console.log(values)
            }}

            >
                {(formikProps)=> {
                    const handleChange = (e:any) => {
                        e.preventDefault()
                        formikProps.setFieldValue('content',
                            [...formikProps.values.content, formikProps.
                        )

                    }
                    return <Form>
                        <div>What to add</div>
                    <span>
                <span className={whatToAdd !== 'parapgraph' ? s.noSel : ""}
                      onClick={() => setWhatToAdd('paragraph')}>
                    Paragraph
                </span>
                <span className={whatToAdd !== 'photo' ? s.noSel : ""}
                      onClick={() => setWhatToAdd('photo')}>
                    Photo
                </span>
                        {
                            whatToAdd === 'paragraph' ?
                                <Field type={"text"}/> : <Field type={"file"} accept={"image/*"}/>
                        }
                        <button onClick={(e) => handleChange(e)}>add item</button>
            </span>
                    </Form>
                }}</Formik>*/}
            {/*<span onClick={h1}>paragraph</span>
                <span onClick={h2}>photo</span>
            <MyForm whatToAdd={whatToAdd}/>*/}
            {/*<OuterForm />*/}
           {/* <OuterForm1 />*/}
            {/*<OuterFormW/>*/}
            {/*<OuterForm3/>*/}
            {/*<MyForm/>*/}
            <MyForm setValues={setValues}/>
            <ContentForm setContent={setContent}/>
            <button onClick={h1}>
                Add news
            </button>
            <button onClick={h2}>
                Get news
            </button>
            <button onClick={h3}>y</button>
        </div>
    );
};

export default Create;