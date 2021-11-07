import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import theme from '../config/theme';
import AppButton from '../components/AppButton';
import { SubmitButton } from '../components/forms';
import AppText from '../components/AppText';

import themeContext from '../config/themeContext';

function CertificationScreen(props) {

  const theme = useContext(themeContext);
return (
  <View style={styles.container}>
      <ImageBackground source={require('../assets/volunteer-page.png')} style={styles.backgroundImage}>
        <AppText style={styles.header}>CERTIFICATIONS</AppText>
        <AppText style={styles.text}>Please select all categories you are <Text style={{fontWeight: 'bold'}}>CERTIFIED</Text> to assist in</AppText>
        <View>
        <AppButton style={[styles.leftSide, {backgroundColor: theme.primary, color: theme.white}]} title='Social Work'/>
        <AppButton style={[styles.rightSide,{backgroundColor: theme.primary}]} title='Health'/>
        <AppButton style={[styles.leftSide, {backgroundColor: theme.primary}]} title='Protection'/>
        <AppButton style={[styles.rightSide,{backgroundColor: theme.primary}]} title='Mental Illness'/>
        <AppButton style={[styles.leftSide, {backgroundColor: theme.primary}]} title='Law'/>
        <AppButton style={[styles.rightSide, {backgroundColor: theme.primary}]} title='Other'/>
        </View>
      </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  backgroundImage:{
      width: '100%',
      height: '100%'
  },
  header:{
    fontSize: 30,
    marginTop: 70,
    fontWeight: 'bold',
    marginLeft: '25%',
    justifyContent: 'center'
  },
  text:{
    fontSize: 20,
    width: '65%',
    textAlign: 'center',
    marginLeft: '18%',
    marginTop: 30
  },
  leftSide:{
    height: 46,
    width: 162,
    borderRadius: 50,
    justifyContent:'center', 
    alignItems:'center',
    marginTop: 60,
    marginLeft: 20,
},
rightSide:{
  height: 46,
  width: 162,
  borderRadius: 50,
  justifyContent:'center', 
  alignItems:'center',
  marginTop: 60,
  marginLeft: '57%',
},

});

export default CertificationScreen;