import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

//I set multiple properties to be able to customize my buttons
function AppButton({title, onPress, color = 'primary'}) {
    return (
    //The button is the container, the text is the child
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})
export default AppButton;