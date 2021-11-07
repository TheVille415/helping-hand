import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../config/theme';

import themeContext from '../config/themeContext';
function DarkModeScreen(props) {

    const theme = useContext(themeContext);
    const[mode, setMode] = useState(false);
    return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <Text style={[styles.text, {color: theme.color}]}> Change the screen to dark mode!</Text>
        <Switch value = {mode} onValueChange = {(value) => {
            setMode(value)
            EventRegister.emit('changeTheme', value);
            }} />
    </View>
    );
    }

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background
  },
  text:{
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 20,
      color: theme.text
  }
});

export default DarkModeScreen;