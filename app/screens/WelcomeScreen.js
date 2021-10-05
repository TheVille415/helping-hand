import React from 'react';
import { StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Form from '../components/forms/Form';
import FormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';

import * as Yup from 'yup';

//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function WelcomeScreen() {
    return (
        <Screen style={styles.container}>
            <>
            <Form 
                initialValues={{email: '', password: ''}}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema} 
                >
                {/* Email input field */}
                <FormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='email'
                    textContentType='emailAddress'
                    />
                {/* Password input field */}
                <FormField
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                name='password'
                placeholder='Password'
                secureTextEntry
                textContentType='password'
                />
                {/* Login Button */}
                <SubmitButton title='Login' />
            </Form>
            </>
       </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
    logo: {
        width: 100,
        height:100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
})
export default WelcomeScreen;