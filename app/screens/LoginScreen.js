import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import theme from '../config/theme';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppText from '../components/AppText';
import Circle from '../components/Circle';
import AppButton from '../components/AppButton';
import themeContext from '../config/themeContext';
import { authAsync } from 'expo-app-auth';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../firebase';
require("firebase/auth");
console.log(auth)

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaNlut6o6bNTLpyLXOVnPGhxdEXz3_ljg",
    authDomain: "helping-hand-a7e07.firebaseapp.com",
    projectId: "helping-hand-a7e07",
    storageBucket: "helping-hand-a7e07.appspot.com",
    messagingSenderId: "569751188411",
    appId: "1:569751188411:web:da06d43d3bfa036726ca9e",
    measurementId: "G-R8PPKT1P8P"
  };



//test commit

//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})





// adding firebase auth 





   


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigation = useNavigation()
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            console.log("if user loginscreen.js")
          navigation.replace("VHome")
        }
      })
  
      return unsubscribe
    }, [])
  
    const handleSignUp = () => {
        
          createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }
  
    const handleLogin = () => {
      auth
        signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
  
  export default LoginScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })

//     return (
//         <View style={styles.container}>
//             <ImageBackground source={require('../assets/login-page.png')} resizeMode="cover" style={styles.header}>
//                  <AppText style={[styles.heading, {color: theme.white}]}>Helping Hand</AppText>
//              </ImageBackground>
//             <View style={[styles.footer, {backgroundColor: theme.whited}]}>
//             <View style={styles.circleContainer}> 
//                      <Circle style={styles.circle1}/>
//                      <Circle style={styles.circle2}/>
//              </View>
//             <AppForm 
//                  initialValues={{email: '', password: ''}}
//                  onSubmit={(email) => //send this to the database 
//                                         handleSignup}
//                  validationSchema={validationSchema} 
//                  >
//                  {/* Email input field */}
//                  <AppFormField
//                      autoCapitalize='none'
//                      autoCorrect={false}
//                      icon='email'
//                      keyboardType='email-address'
//                      name='email'
//                      placeholder='email'
//                      textContentType='emailAddress'
//                      />
//                  {/* Password input field */}
//                  <AppFormField
//                  autoCapitalize='none'
//                  autoCorrect={false}
//                  icon='lock'
//                  name='password'
//                  placeholder='Password'
//                  secureTextEntry
//                  textContentType='password'
//                  />
//                  {/* Login Button */}
//                  {/* planning on changing Vhome once we have our client side up */}
//                  <AppButton style={[styles.submit, {backgroundColor: theme.primary}, {color: theme.white}]} title='Login' onPress={() => 
//                         navigation.navigate('VHome')}/>
//                  <View style={styles.signupContainer}>
//                      <AppText style={styles.signup}>Don't have an account?</AppText>
//                      <Button style={styles.signupButton} color={theme.primary} title="Create Account" accessibilityLabel="Create an account" onPress={() => 
//                         navigation.navigate('SignUp')}/>
//                  </View>
//              </AppForm>
//             </View>
//         </View>
//      );
//  }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     heading:{

//         fontSize: 30
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     circleContainer:{
//         flexDirection: 'row',
//         marginLeft: '30%',
//         justifyContent: 'space-between',
//         position:'absolute',
//         top: -40
//     },
//     footer: {
//         flex:1,
//         paddingVertical: 50,
//         paddingHorizontal: 30,
//     },
//     submit:{
//         height: 50,
//         width: '100%',
//         borderRadius: 50,
//         justifyContent:'center', 
//         alignItems:'center',
//         marginTop: 60,
//     },
//     signup:{
//         marginTop: 40,
//         marginLeft: 20,
//     },
//     signupContainer:{
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'baseline',
//     },
// })

// export default LoginScreen;