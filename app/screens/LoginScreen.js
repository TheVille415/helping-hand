import React, { useContext, useState } from 'react';
import { StyleSheet, View, Button, ImageBackground } from 'react-native';
import * as Yup from 'yup';
import theme from '../config/theme';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppText from '../components/AppText';
import Circle from '../components/Circle';
import AppButton from '../components/AppButton';
import themeContext from '../config/themeContext';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from 'react-native-google-signin';



//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = ({ navigation }) => {

    const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);

_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
    
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  {!loggedIn && <Text>You are currently logged out</Text>}
                  {loggedIn && (
                    <Button
                      onPress={this.signOut}
                      title="LogOut"
                      color="red"></Button>
                  )}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );;
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading:{

        fontSize: 30
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainer:{
        flexDirection: 'row',
        marginLeft: '30%',
        justifyContent: 'space-between',
        position:'absolute',
        top: -40
    },
    footer: {
        flex:1,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    submit:{
        height: 50,
        width: '100%',
        borderRadius: 50,
        justifyContent:'center', 
        alignItems:'center',
        marginTop: 60,
    },
    signup:{
        marginTop: 40,
        marginLeft: 20,
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
})

export default LoginScreen;