import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Yup from 'yup';

import theme from '../../config/theme';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms'
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import themeContext from '../../config/themeContext';


//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})


const UserSignupScreen = ({ navigation }) => {

    const theme = useContext(themeContext);
    return (
        <View style={styles.container}>
             <AppText style={styles.heading}>Helping Hand</AppText>
            <View style={styles.footer}>
            <AppForm 
                 initialValues={{email: '', password: ''}}
                 onSubmit={(value) => console.log(value)}
                 validationSchema={validationSchema} 
                 >
                 {/* Name input field */}
                 <AppFormField
                     autoCapitalize='none'
                     autoCorrect={false}
                     icon='account-tie'
                     keyboardType='default'
                     name='Name'
                     placeholder='Name'
                     textContentType='name'
                     />
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
                 {/* Phone number input field */}
                 <AppFormField
                     autoCapitalize='none'
                     autoCorrect={false}
                     icon='phone'
                     keyboardType='phone-pad'
                     name='phone'
                     placeholder='Phone'
                     textContentType='telephoneNumber'
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
                 <AppButton style={[styles.submit, {backgroundColor: theme.primary}]} title='Sign Up' onPress={() => 
                        navigation.navigate('VHome')}/>
                 <View style={styles.signupContainer}>
                     <AppText style={styles.signup}>Already have an account?</AppText>
                     <Button style={styles.signupButton} color={theme.primary} title="Login" accessibilityLabel="Login to your account" onPress={() => 
                        navigation.navigate('Login')}/>
                 </View>
             </AppForm>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor
    },
    heading:{
        marginTop: 70,
        marginLeft: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        color:theme.text,
        fontSize: 30
    },
    header: {
        flex: 1,
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex:1,
        marginVertical: '20%',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: theme.backgroundColor,
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
        color: theme.text,
        marginTop: 60,
        backgroundColor: theme.primary
    },
    signup:{
        marginTop: 40,
        marginLeft: 20,
        color: theme.text
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
})

export default UserSignupScreen;