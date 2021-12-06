import React, {Children, useContext} from 'react';

import { Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import themeContext from '../config/themeContext';
import AppText from './AppText';

//I set multiple properties to be able to customize my buttons
function AppButton({title, onPress, color, ...otherProps}) {

    const theme = useContext(themeContext);

    return (
    //The button is the container, the text is the child
    <TouchableOpacity {...otherProps} onPress={onPress}>
        <AppText style={[styles.text, {color:theme.white}]}>{title}</AppText>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        alignItems:'center',
        justifyContent: 'center'
    },
})
export default AppButton;