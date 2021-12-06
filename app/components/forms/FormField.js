import React from 'react';
import { useFormikContext } from 'formik'
import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import theme from '../../config/theme';

function AppFormField({ name, width, ...otherProps }) {

    const{ setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
                />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
export default AppFormField;