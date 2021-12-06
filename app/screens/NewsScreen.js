import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import themeContext from '../config/themeContext';

function NewsScreen(props) {

  const theme = useContext(themeContext);
return (
  <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color:theme.color}]}>NEWS</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    display: 'flex',
    marginTop: '50%',
    marginLeft: '40%'
}
});

export default NewsScreen;