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
        image: <Image source={require('../assets/neighbor.png')} style={styles.image}/>,
        title: 'Request Help',
        subtitle: 'Fill out a short description of whats happening and our volunteers will respond within minutes',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/neighbor.png')} style={styles.image}/>,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
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