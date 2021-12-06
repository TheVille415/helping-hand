import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../../components/AppText';
import themeContext from '../../config/themeContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NonUrgentScreen = ({ navigation }) => {
    const theme = useContext(themeContext)
    
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <AppText style={[styles.title, {color: theme.color}]}> What's going on today? </AppText>
            <AppText style={[styles.emergencyText, {color: theme.emergency}]}>Please note if you have an emergency please contact 911</AppText>
            {/* URGENT BUTTON */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.urgency, {backgroundColor: theme.primary}]} onPress={() => 
                          navigation.navigate('Login')}>
                    <AppText style={[styles.urgencyText, {color: theme.white}]}>Domestic</AppText>
                    <Icon name="home-city" size={35} color={'white'} style={{textAlign: 'center'}}/>
                </TouchableOpacity> 
                {/* NON-URGENT BUTTON */}
                <TouchableOpacity style={[styles.urgency, {backgroundColor: theme.primary}]}>
                <AppText style={[styles.urgencyText, {color: theme.white}]}>Medical</AppText>
                <Icon name="medical-bag" size={35} color={'white'} style={{textAlign: 'center'}}/>
                </TouchableOpacity>
            </View>
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
  emergencyText:{
      textAlign: 'center',
      fontSize: 20,
      marginTop: '10%'
  },
  buttonRow:{
    flexDirection: 'row',
  },
  urgency:{
      width: '35%',
      height: 100,
      borderRadius: 10,
      marginLeft: '9%',
      marginTop: '30%',
      marginRight: '2%',
  },
  urgencyText:{
      fontSize: 26,
      textAlign: 'center'
  }
});

export default NonUrgentScreen;