import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function CertificationScreen(props) {
return (
  <View style={styles.container}>
      <Image source={require('../assets/volunteer-page.png')} resizeMode="contain" style={styles.backgroundImage}></Image>
      <Button style={styles.category} color={colors.primary} title="Social Work" accessibilityLabel="Social Work"/>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  backgroundImage:{
      width: '100%',
      height: '100%'
  },
  category:{
    flex: 1,
    height: 50,
    width: '100%',
    borderRadius: 50,
    justifyContent:'center', 
    alignItems:'center',
    color: colors.white,
    marginTop: 60,
    backgroundColor: colors.primary,
},

});

export default CertificationScreen;