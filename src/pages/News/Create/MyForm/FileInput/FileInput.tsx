import {useField, useFormik, useFormikContext} from 'formik';

export const FileInput = ({ name }:any) => {
    const [field, meta, helpers] = useField(name);
    const formik = useFormikContext()
    const { setFieldValue } = formik;

    const onChange = (event:any) => {
        const file = event.currentTarget.files[0];
        setFieldValue(field.name, file);
    };

    return (
        <div>
            <input
                type="file"
                id={field.name}
                name={field.name}
                onChange={onChange}
            />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </div>
    );
};




