import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from '../../components/AppText';
import themeContext from '../../config/themeContext';


const HomeScreen = ({ navigation }) => {
    const theme = useContext(themeContext)
    
    return (
        <>
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <AppText style={[styles.title, {color: theme.color}]}> How urgently do you need help?</AppText>
            <AppText style={[styles.emergencyText, {color: theme.emergency}]}>Please note if you have an emergency please contact 911</AppText>
            {/* URGENT BUTTON */}
            <TouchableOpacity style={[styles.urgent, {backgroundColor: theme.emergency}]}>
                <AppText style={[styles.urgentText, {color: theme.white}]}>Urgent</AppText>
            </TouchableOpacity> 
            {/* NON-URGENT BUTTON */}
            <TouchableOpacity style={[styles.nonUrgent, {backgroundColor: theme.primary}]}>
            <AppText style={[styles.nonurgentText, {color: theme.white}]}>Non Urgent</AppText>
            </TouchableOpacity>
        </View>
        </>
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
  urgent:{
      width: 70,
      height: 70,
  },
  nonurgent:{
    width: 70,
    height: 70,
}
});

export default HomeScreen;