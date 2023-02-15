import React, {useState} from 'react';
import {TextArea} from "../TextArea/TextArea";
import {FileInput} from "../FileInput/FileInput";
import {Field} from "formik";

const ContentForm = ({setContent}: any) => {
    let [whatToAdd, setWhatToAdd] = useState('paragraph')
    const [value, setValue] = useState('')
    const h1 = () => {
        setWhatToAdd('paragraph')
    }
    const h2 = () => {
        setWhatToAdd('photo')
    }
    const h3 = () => {
        //content.push({type: whatToAdd, value: value});
        setContent((v:any)=>[...v, {type: whatToAdd, value: value}])
        setValue('')
    }
    const h4 = (e: any) => {
        e.preventDefault()
        setValue(

            whatToAdd === 'paragraph' ?
                e.target.value
                :
                e.target.files[0]
        )

    }
    return (
        <div >
            <span onClick={h1}>paragraph</span>
            <span onClick={h2}>photo</span>
            {whatToAdd === 'paragraph' ? <textarea value={value} onChange={h4}/> :
                <input type={"file"}  onChange={h4}/>}
            <button  /*disabled={isSubmitting}*/ onClick={h3}>
                Submit
            </button>
        </div>
    );
};

export default ContentForm;