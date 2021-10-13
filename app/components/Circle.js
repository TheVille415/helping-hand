import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles'

function Circle(style, {...otherProps}) {
return (
  <View style={styles.container}>
      <View style={[defaultStyles.circle, style]}{...otherProps}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  },
});

export default Circle;