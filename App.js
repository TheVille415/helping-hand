import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import * as Google from 'expo-google-app-auth'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "592436565802-e4th358kmfstav33vggan2eglcan88rq.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})

// import React, { useState, useEffect } from 'react';
// //install react native stack navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { EventRegister } from 'react-native-event-listeners';
// //Import the themes
// import themeContext from './app/config/themeContext';
// import theme from './app/config/theme';
// //import screens
// import SignInScreen from './app/screens/SignInScreen'
// import SplashScreen from './app/screens/SplashScreen';
// import UserSignupScreen from './app/screens/UserSignupScreen';
// import LoginScreen from './app/screens/LoginScreen';
// import VolunteerSignupScreen from './app/screens/VolunteerSignupScreen';
// import TabBarScreen from './navigation/TabBarScreen'
// import VolunteerHomeScreen from './app/screens/VolunteerHomeScreen';
// import CertificationScreen from './app/screens/CertificationScreen';
// import ProfileScreen from './app/screens/ProfileScreen';
// import NewsScreen from './app/screens/NewsScreen';
// import NotificationScreen from './app/screens/NotificationScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import DarkModeScreen from './app/screens/DarkModeScreen';
// import SettingsScreen from './app/screens/SettingsScreen';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {

//   const [mode, setMode] = useState(false);

//   useEffect(() => {
//     let eventListener = EventRegister.addEventListener(
//       'changeTheme', 
//       (data) => {
//       setMode(data);
//     });
//     return () => {
//       EventRegister.removeEventListener(eventListener);
//     };
//   });
//   return (
//     <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
//       <NavigationContainer> 
//         <Stack.Navigator>
//         <Stack.Screen
//             name="Settings"
//             component={SettingsScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Splash"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen 
//             name="SignUp" 
//             component={UserSignupScreen} 
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen 
//             name="Certification" 
//             component={CertificationScreen} 
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen 
//             name="Login" 
//             component={LoginScreen} 
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="News"
//             component={NewsScreen}
//             // options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Requests"
//             component={NotificationScreen}
//             // options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Messages"
//             component={MessagesScreen}
//             // options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Profile"
//             component={ProfileScreen}
//             options={{ tabBarVisible: false }}
//           />
//           <Stack.Screen
//             name="VHome"
//             component={TabBarScreen}
//             options={{headerShown: false }}
//           />
//           <Stack.Screen
//             name="VSignUp"
//             component={VolunteerSignupScreen}
//             options={{headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </themeContext.Provider>
//   );
// };

// export default MyStack;