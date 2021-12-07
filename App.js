import React, { useState, useEffect } from 'react';
//install react native stack navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage  from '@react-native-async-storage/async-storage';
//Import the themes
import themeContext from './app/config/themeContext';
import theme from './app/config/theme';
//import screens
import SplashScreen from './app/screens/SplashScreen';
import UserSignupScreen from './app/screens/Users/UserSignupScreen';
import LoginScreen from './app/screens/LoginScreen';
import VolunteerSignupScreen from './app/screens/Volunteers/VolunteerSignupScreen';
import TabBarScreen from './navigation/TabBarScreen';
import CertificationScreen from './app/screens/Volunteers/CertificationScreen';
import ProfileScreen from './app/screens/Volunteers/ProfileScreen';
import NewsScreen from './app/screens/NewsScreen';
import NotificationScreen from './app/screens/NotificationScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import DescriptionScreen from './app/screens/Users/DescriptionScreen';
import HomeScreen from './app/screens/Users/HomeScreen';
import UserLoginScreen from './app/screens/Users/UserLoginScreen';
import NonUrgentScreen from './app/screens/Users/NonUrgentScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {

  const [mode, setMode] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);


  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunch', 'true');
  //       setIsFirstLaunch(true)
  //     } else {
  //       setIsFirstLaunch(false)
  //     }
  //   })
  // }, []);
  // if (isFirstLaunch == null) {
  //   return null
  // } 
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeTheme', 
      (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen
            name="Onboard"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={UserSignupScreen} 
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
            name="News"
            component={NewsScreen}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Requests"
            component={NotificationScreen}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarVisible: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarVisible: false}}
          />
          <Stack.Screen
            name="VHome"
            component={TabBarScreen}
            options={{headerShown: false }}
          />
          <Stack.Screen 
            name="UserLogin"
            component={UserLoginScreen}
            options={{headerShown: false }}
          />
          <Stack.Screen
            name="Description"
            component={DescriptionScreen}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name="NUScreen"
            component={NonUrgentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VSignUp"
            component={VolunteerSignupScreen}
            options={{headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default MyStack;