import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';

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
                    <TouchableOpacity style={styles.request}>
                        <AppText>I'm seeking help</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.help} color={colors.black}>
                        <AppText>I want to help</AppText>
                    </TouchableOpacity>
                </View>

                <Text style={styles.loginText}>Already have an account?</Text>
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
    loginText:{
        color: colors.black,
        marginTop:'50%'
    },
    buttonContainer:{
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'baseline'
    },
    request: {
        width: '45%',
        height: 70,
        backgroundColor: colors.primary,
        marginTop: '40%',
        marginLeft: '-90%',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    help:{
        width: '45%',
        height: 70,
        backgroundColor: colors.black,
        color: colors.white,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'baseline',
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