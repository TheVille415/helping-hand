import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../config/theme';
import defaultStyles from '../config/styles'
import themeContext from '../config/themeContext';

function Circle( {...otherProps}) {

  const theme = useContext(themeContext);

return (
  <View style={styles.container}>
      <View style={[styles.circle, {backgroundColor: theme.white}]}{...otherProps}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
}
});

export default Circle;