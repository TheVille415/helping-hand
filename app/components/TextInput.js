import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'

//These ...otherProps make it so we have access
//to the other props that are offered with 
//text inputs
function AppTextInput({icon, width = '100%', ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            { icon && <MaterialCommunityIcons 
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />}
            <TextInput 
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text} {...otherProps} />
        </View>
    );
}