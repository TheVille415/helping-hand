import React from 'react';
import { View,Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal:15}} {...props}>
        <Text style={{fontSize: 16, color: '#445626'}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {

return (
    <Onboarding
    DoneButtonComponent ={Done}
    onSkip={() => navigation.replace('Splash')}
    onDone={() => navigation.navigate('Splash')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/match.png')} style={styles.image}/>,
        title: 'Request Help',
        subtitle: 'By filling out our short form, get matched with professional volunteers to help with any requests you may have',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/call.png')} style={styles.image}/>,
        title: 'Response in minutes',
        subtitle: 'Volunteers have 2 minutes to respond to your request so you will receive help ASAP',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/rate.png')} style={styles.image}/>,
        title: 'Rate your experience',
        subtitle: 'Help make this app a safe space by holding our volunteers accountable, after each incident you will have the option to rate your volunteer',
      },

    ]}
  />
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
  },
  image:{
      width: 200,
      height: 200
  }
});

export default OnboardingScreen;