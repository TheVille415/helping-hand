import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                 <Image source={require('../assets/logo.png')} style={styles.logo}/>
                 <AppText style={styles.text}>serve the community in any way you want</AppText>
            </View>
            <View style={styles.footer}>
                 <AppText style={styles.signupText}>How will you be signing up today?</AppText>
                 <View style={styles.buttonContainer}>
                     {/* Need to make sure to distinguish 2 differnt names for user signup and Volunteer signup */}
                     <AppButton 
                     title="I'm seeking help" 
                     style={styles.request}
                     onPress={() => 
                        navigation.navigate('SignUp')}
                     />
                     <AppButton title="I want to help" style={styles.help} onPress={() => 
                        navigation.navigate('VSignUp')}/>
                 </View>
                 <View style={styles.accountContainer}>
                     <Text style={styles.loginText}>Already have an account?</Text>
                     <Button style={styles.loginButton} color={colors.primary} title="Login" accessibilityLabel="Login" onPress={() => 
                        navigation.navigate('Login')}/>
                 </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    header: {
        flex: 1,
        backgroundColor: colors.primary,
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
        alignItems: 'center'
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
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius:10,
        color: colors.white
    },
    help:{
        width: '45%',
        height: 70,
        backgroundColor: colors.black,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 22,
        width: '70%',
        color: colors.white
    },
})

export default SplashScreen;