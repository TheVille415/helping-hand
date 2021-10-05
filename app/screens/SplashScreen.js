import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
                <AppButton style={styles.request} title="I'm seeking help"></AppButton>
                <AppButton style={styles.help} title="I want to help"></AppButton>
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
    request: {
        width: '45%',
        height: 70,
        backgroundColor: colors.primary,
        marginTop: '40%',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    help:{
        width: '45%',
        height: 70,
        backgroundColor: colors.black,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
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