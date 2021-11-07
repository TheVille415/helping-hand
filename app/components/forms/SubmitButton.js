import React from 'react';
import { useFormikContext } from 'formik';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from '../AppText';
import theme from '../../config/theme';

function SubmitButton({ title, backgroundColor, ...otherProps}) {

    const { handleSubmit } = useFormikContext();
    return (
        <TouchableOpacity {...otherProps} backgroundColor={backgroundColor} onPress={handleSubmit}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        color: theme.text
    }
})

export default SubmitButton;