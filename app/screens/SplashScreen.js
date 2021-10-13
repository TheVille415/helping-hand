import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function SplashScreen(props) {

    return (
       <View style={styles.container}>
           <View style={styles.header}>
                <AppText style={styles.text}>Welcome to Helping Hand </AppText>
           </View>
           <View style={styles.footer}>
                <AppText style={styles.signupText}>How will you be signing up today?</AppText>
                <View style={styles.buttonContainer}>
                    <AppButton title="I'm seeking help" style={styles.request}/>
                    <AppButton title="I want to help" style={styles.help}/>
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Button style={styles.loginButton} color={colors.primary} title="Login" accessibilityLabel="Login"/>
                </View>
           </View>
       </View>
    );
}

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
        fontSize: 30,
        color: colors.white
    },
})

export default SplashScreen;