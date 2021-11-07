import React, { useContext } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import themeContext from '../config/themeContext';

//These ...otherProps make it so we have access
//to the other props that are offered with 
//text inputs
function AppTextInput({icon, width = '100%', ...otherProps}) {

    const theme = useContext(themeContext)

    return (
        <View style={[styles.container,{backgroundColor: theme.white}, {width}]}>
            { icon && <MaterialCommunityIcons 
                name={icon}
                size={20}
                style={styles.icon}
            />}
            <TextInput
            style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    },
})
export default AppTextInput;