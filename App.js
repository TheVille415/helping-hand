import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Circle from './app/components/Circle';
import CertificationScreen from './app/screens/CertificationScreen';
import LoginScreen from './app/screens/LoginScreen'
import SignupScreen from './app/screens/SignupScreen';
import SplashScreen from './app/screens/SplashScreen';
import VolunteerHomeScreen from './app/screens/VolunteerHomeScreen'
import Tabs from './navigation/bottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

