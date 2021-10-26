import * as React from 'react';
//install react native stack navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import screens
import SplashScreen from './app/screens/SplashScreen';
import UserSignupScreen from './app/screens/UserSignupScreen';
import LoginScreen from './app/screens/LoginScreen';
import VolunteerSignupScreen from './app/screens/VolunteerSignupScreen';
import TabBarScreen from './navigation/TabBarScreen'
import VolunteerHomeScreen from './app/screens/VolunteerHomeScreen';
import CertificationScreen from './app/screens/CertificationScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import NewsScreen from './app/screens/NewsScreen';
import NotificationScreen from './app/screens/NotificationScreen';
import MessagesScreen from './app/screens/MessagesScreen';

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
          name="Messages"
          component={MessagesScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarVisible: false }}
        />
        {/* <Stack.Screen 
          name="Volunteer" 
          component={VolunteerHomeScreen} 
          options={{ headerShown: false }}
        />         */}
        <Stack.Screen
          name="VHome"
          component={TabBarScreen}
          options={{headerShown: false }}
        />
        <Stack.Screen
          name="VSignUp"
          component={VolunteerSignupScreen}
          options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;