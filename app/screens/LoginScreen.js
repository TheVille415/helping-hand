import React, { useContext, useState } from 'react';
import { StyleSheet, View, Button, ImageBackground } from 'react-native';
import * as Yup from 'yup';
import theme from '../config/theme';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppText from '../components/AppText';
import Circle from '../components/Circle';
import AppButton from '../components/AppButton';
import themeContext from '../config/themeContext';

//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
const LoginScreen = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/login-page.png')} resizeMode="cover" style={styles.header}>
                 <AppText style={styles.heading}>Helping Hand</AppText>
             </ImageBackground>
            <View style={[styles.footer, {backgroundColor: theme.light}]}>
            <View style={styles.circleContainer}> 
                     <Circle style={styles.circle1}/>
                     <Circle style={styles.circle2}/>
             </View>
            <AppForm 
                 initialValues={{email: '', password: ''}}
                 onSubmit={(value) => console.log(value)}
                 validationSchema={validationSchema} 
                 >
                 {/* Email input field */}
                 <AppFormField
                     autoCapitalize='none'
                     autoCorrect={false}
                     icon='email'
                     keyboardType='email-address'
                     name='email'
                     placeholder='email'
                     textContentType='emailAddress'
                     />
                 {/* Password input field */}
                 <AppFormField
                 autoCapitalize='none'
                 autoCorrect={false}
                 icon='lock'
                 name='password'
                 placeholder='Password'
                 secureTextEntry
                 textContentType='password'
                 />
                 {/* Login Button */}
                 {/* planning on changing Vhome once we have our client side up */}
                 <AppButton style={[styles.submit, {backgroundColor: theme.primary, color: theme.white}]} title='Login' onPress={() => 
                        navigation.navigate('VHome')}/>
                 <View style={styles.signupContainer}>
                     <AppText style={styles.signup}>Don't have an account?</AppText>
                     <Button style={styles.signupButton} color={theme.primary} title="Create Account" accessibilityLabel="Create an account" onPress={() => 
                        navigation.navigate('SignUp')}/>
                 </View>
             </AppForm>
            </View>
        </View>
     );
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