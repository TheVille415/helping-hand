import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import Expo from 'expo'

export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: ""
        }
    }
    signIn = async() => {
        try {
            const result = await Google.logInAsync({
              iosClientId: '592436565802-e4th358kmfstav33vggan2eglcan88rq.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {
               this.setState({
                signedIn: true,
                name: result.user.name,
                photoUrl:result.user.photoUrl
                })
            } else {
              console.log('cancelled')
            }
          } catch (e) {
            console.log('error', e)
          }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.signedIn ? (
                    <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
                ) : (<LoginPage signIn={this.signIn} />)}
            </View>
        )
    }
}

const LoginPage = props => {
    return (
        <View>
            <Text style={styles.header}>Sign In with Google</Text>
            <Button title="Sign In with Google" onPress={() => props.signIn()} />
        </View>
    )
}

const LoggedInPage = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome: {props.name} </Text>
            <Image style={styles.image} source={{uri: props.photoUrl}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      header: {
        fontSize: 25
      },
      image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: dodgerblue,
        borderWidth: 3,
        borderRadius: 150
      }
})