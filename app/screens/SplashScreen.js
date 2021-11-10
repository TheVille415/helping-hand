import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import AppText from '../components/AppText';
import theme from '../config/theme';
import AppButton from '../components/AppButton';
import themeContext from '../config/themeContext';

const SplashScreen = ({ navigation }) => {
    const theme = useContext(themeContext)
    
    return (
        <View style={styles.container}>
            <View style={[styles.header, {backgroundColor: theme.primary}, {borderBottomEndRadius: 200}]}>
                 <Image source={require('../assets/logo.png')} style={styles.logo}/>
                 <AppText style={[styles.text, {color: theme.white}]}>serve the community in any way you want</AppText>
            </View>
            <View style={styles.footer}>
                 <AppText style={styles.signupText}>How will you be signing up today?</AppText>
                 <View style={styles.buttonContainer}>
                     {/* Need to make sure to distinguish 2 differnt names for user signup and Volunteer signup */}
                     <AppButton 
                     title="Seeking Help" 
                     style={[styles.request, {backgroundColor: theme.primary}]}
                     onPress={() => 
                        navigation.navigate('SignUp')}
                     />
                     <AppButton title="I want to help" style={[styles.help, {backgroundColor: theme.black}]} onPress={() => 
                        navigation.navigate('VSignUp')}/>
                 </View>
                 <View style={styles.accountContainer}>
                     <Text style={styles.loginText}>Already have an account?</Text>
                     <Button style={styles.loginButton} color={theme.primary} title="Login" accessibilityLabel="Login" onPress={() => 
                        navigation.navigate('Login')}/>
                 </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 150,
        height: 150
    },
    signupText: {
        fontSize: 35,
        width: '90%',
        textAlign: 'center'
    },
    accountContainer:{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: '85%',
        marginLeft: '-95%'
    },
    loginText:{
        fontSize: 16
    },
    buttonContainer:{
        width: '100%',
        marginLeft: '-90%',
        marginTop: '50%',
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
    request: {
        width: '45%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    help:{
        width: '45%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 50
    },
    text: {
        fontSize: 22,
        width: '70%',
    },
})

export default SplashScreen;