import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NewsScreen(props) {
return (
  <View style={styles.container}>
      <Text style={styles.text}>NEWS</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  text:{
    display: 'flex',
    marginTop: '50%',
    marginLeft: '40%'
}
});

export default NewsScreen;