import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AppText from '../../components/AppText';
import themeContext from '../../config/themeContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppButton from '../../components/AppButton';

const DescriptionScreen = ({ navigation }) => {
    const theme = useContext(themeContext)
    const [text, onChangeText] = React.useState("Start typing here...");
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <AppText style={styles.title}>Tell us a little more</AppText>
            <AppText style={styles.subText}> Who is in need?</AppText>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.me, {backgroundColor: theme.primary}]} onPress={() => 
                          navigation.navigate('Login')}>
                    <AppText style={[styles.meText, {color: theme.white}]}>Me</AppText>
                </TouchableOpacity> 
                {/* NON-URGENT BUTTON */}
                <TouchableOpacity style={[styles.me, {backgroundColor: theme.primary}]}>
                <AppText style={[styles.meText, {color: theme.white}]}>Someone Else</AppText>
                </TouchableOpacity>
            </View>
            <AppText style={styles.subText}> What's going on?</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="start typing here..."
                keyboardType="default"
            />
            <AppButton title="Submit" style={[styles.submit, {backgroundColor: theme.primary}]} onPress={() => 
                        navigation.navigate('Home')}/>
        </View>

    );
};


const styles = StyleSheet.create({
  container:{
      flex: 1
  },
  title:{
      textAlign: 'center',
      fontSize: 36,
      marginTop: '20%'
  },
  subText:{
      fontSize: 20,
      marginLeft: '10%',
      marginTop: '10%',
      fontWeight: 'bold'
  },
  buttonRow:{
    flexDirection: 'row',
  },
  me:{
    width: '45%',
    height: 80,
    borderRadius: 10,
    marginLeft: '2%',
    marginTop: '10%',
    marginRight: '2%',
    justifyContent: 'center'
},
meText:{
    textAlign:'center'
},
input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
  },
  submit:{
      width: '35%',
      height: '5%',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '60%',
      marginTop: '10%'
  }
});

export default DescriptionScreen;