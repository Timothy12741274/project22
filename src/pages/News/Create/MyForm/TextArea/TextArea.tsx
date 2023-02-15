import {useField, useFormik, useFormikContext} from 'formik';

export const TextArea = ({ name }: any) => {
    const [field, meta, helpers] = useField(name);
    //const formik = useFormik();
    const formik = useFormikContext()
    const { setFieldValue } = formik;

    const onChange = (event:any) => {
        setFieldValue(field.name, event.target.value);
    };

    return (
        <div>
      <textarea
          id={field.name}
          name={field.name}
          onChange={onChange}
          value={field.value}
      />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </div>
    );
};


