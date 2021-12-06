import React, { useContext } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import * as Yup from 'yup';
import themeContext from '../../config/themeContext';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms'
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';


//These are all the rules for validating our form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})


const VolunteerSignupScreen = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <View style={[styles.container, {backgroundColor: theme.primary}]}>
             <AppText style={[styles.heading, {color: theme.white}]}>Helping Hand</AppText>
             <Image source={require('../../assets/logo.png')} style={styles.logo}/>
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
                     style={styles.field}
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
                     style={styles.field}
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
                 style={styles.field}
                 />
                 {/* Login Button */}
                 <AppButton style={[styles.submit, {backgroundColor: theme.black}]} title='Sign Up' onPress={() => 
                        navigation.navigate('Certification')}/>
                 <View style={styles.signupContainer}>
                     <AppText style={[styles.signup, {color: theme.white}]}>Already have an account?</AppText>
                     <Button style={styles.signupButton} color={theme.white} title="Login" accessibilityLabel="Login to your account" onPress={() => 
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
    },
    heading:{
        marginTop: 70,
        marginLeft: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },
    footer: {
        flex:1,
        marginVertical: '5%',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    logo:{
        flexDirection: 'row',
        marginLeft: '30%',
        width: 120,
        height: 120,
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
        justifyContent: 'center',
        alignItems: 'baseline',
    },
})

export default VolunteerSignupScreen;