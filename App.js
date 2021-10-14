import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/SplashScreen';
import SignupScreen from './app/screens/SignupScreen';
import TabBarScreen from './navigation/TabBarScreen'
import VolunteerHomeScreen from './app/screens/VolunteerHomeScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignupScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Certification" 
          component={CertificationScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Volunteer" 
          component={VolunteerHomeScreen} 
          options={{ headerShown: false }}
        />        
        <Stack.Screen
          name="VHome"
          component={TabBarScreen}
          options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};