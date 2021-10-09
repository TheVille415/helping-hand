import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppText from '../components/AppText';


//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {

    return (
       <View style={styles.container}>
           <View style={styles.header}>
            <AppText style={styles.heading}>Helping Hand</AppText>
           </View>
           <View style={styles.footer}>
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
                <SubmitButton style={styles.submit} title='Login' />
                <View style={styles.signupContainer}>
                    <AppText style={styles.signup}>Don't have an account?</AppText>
                    <Button style={styles.signupButton} color={colors.primary} title="Create Account" accessibilityLabel="Create an account"/>
                </View>
            </AppForm>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    heading:{
        color:colors.white,
        fontSize: 30
    },
    header: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex:1,
        backgroundColor: colors.white,
        borderRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    submit:{
        height: 50,
        width: '100%',
        borderRadius: 50,
        justifyContent:'center', 
        alignItems:'center',
        color: colors.white,
        marginTop: 60,
        backgroundColor: colors.primary
    },
    signup:{
        marginTop: 40,
        marginLeft: 20,
        color: colors.black
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
})

export default LoginScreen;