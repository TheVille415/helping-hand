import React from 'react';
import { useFormikContext } from 'formik';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from '../AppText';

import AppButton from '../AppButton';
import colors from '../../config/colors';

function SubmitButton({ title, color, ...otherProps}) {

    const { handleSubmit } = useFormikContext();
    return (
        <TouchableOpacity {...otherProps} color={color} onPress={handleSubmit}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        color: colors.white
    }
})

export default SubmitButton;