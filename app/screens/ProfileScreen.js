import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

function ProfileScreen(props) {
return (
  <View style={styles.container}>
      <Text style={styles.text}>PROFILE</Text>
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

export default ProfileScreen;