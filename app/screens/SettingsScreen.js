import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import AppText from '../components/AppText';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/themeContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsScreen = ({ navigation }) => {

  const theme = useContext(themeContext);

  const[mode, setMode] = useState(false);

  return (
<>
    {/* Settings Header */}
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <AppText style={[styles.header, {color: theme.color}]}>Settings</AppText>
        {/* Account section */}
        <AppText style={[styles.account, {color:theme.color}]}>Account</AppText>
        <View style={styles.accountRow}>
            <View style={[styles.profileAccount, {backgroundColor: theme.grey}]}>
              <Icon name='account' size={40}/>
            </View>
            <View style={styles.nameC}>
            <AppText style={[styles.nameText, {color: theme.color}]}>Brian R</AppText>
            <AppText style={[styles.subText, {color:theme.grey}]}>Personal Info</AppText>
            </View>
            <TouchableOpacity onPress={() => 
                          navigation.navigate('Profile')}>
                <Icon name='chevron-right' color={theme.black} size={25}/>
            </TouchableOpacity>
        </View>
        {/* Preferences Section */}
        <AppText style={[styles.account, {color:theme.color}]}>Preferences</AppText>
        <View style={styles.accountRow}>
            <View style={[styles.profileAccount, {backgroundColor: theme.green}]}>
              <Icon name='bell' size={25}/>
            </View>
            <View style={styles.nameC}>
            <AppText style={[styles.notificationText, {color: theme.color}]}>Notifications</AppText>
            </View>
            <TouchableOpacity style={{marginTop: '5%'}}>
                <Icon name='chevron-right' color={theme.black} size={25} />
            </TouchableOpacity>
        </View>
    </View>

    {/* DARK MODE SECTION */}
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.darkModeRow}>
        <View style={[styles.darkMode, {backgroundColor: theme.green}]}>
          <Icon name='moon-waning-crescent' size={25}/>
        </View>
          <View style={styles.darkModeToggle}>
            <AppText style={[styles.darkModeText, {color: theme.color}]}>Dark Mode</AppText>
          <Switch value = {mode} onValueChange = {(value) => {
              setMode(value)
              EventRegister.emit('changeTheme', value);
              }} />

          </View>
      </View>

      {/* LOGOUT BUTTON */}
        <View>
          <TouchableOpacity style={[styles.logout, {backgroundColor: theme.background},
            {borderColor: theme.error}]} onPress={() => 
                          navigation.navigate('Login')}>
          <View style={styles.logoutView}>
            <AppText style={[styles.logoutText, {color: theme.color}]}>Logout</AppText>
              <Icon style={{ marginLeft: 20 }}name='logout' size={20} color={theme.error}/>
          </View>
          </TouchableOpacity>
        </View>
      </View>

    </>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
  },
  edit:{
    marginTop: 15,
    flexDirection: 'row',
  },
  input:{
    width: '80%',
    height: '50%'
  },
  noncEdit:{
    marginTop: 15,
    flexDirection: 'row',
  },
  account:{
    marginLeft: '10%',
    marginTop: '10%',
    fontSize: 22
  },
 accountRow:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginLeft: '10%',
    marginTop: '7%',
    paddingRight: '15%'
 },
 darkModeRow:{
  flex: 1,
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent:'space-evenly',
  marginLeft: '10%',
  marginTop: '5%',
  paddingRight: '15%'
},
 darkModeToggle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginLeft: '20%',
 },
 darkModeText:{
  marginRight: '40%'
 },
 nameC:{
    flex: 1,
    flexDirection: 'column'
 },
  logout:{
    marginLeft: '10%',
    marginTop: '-50%',
    marginBottom: '30%',
    width: '75%',
    height: '40%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 25,
    borderWidth: 1,
  },
  logoutView:{
    flexDirection: 'row',
  },
  nameText:{
    fontSize: 20
  },
  notificationText:{
    fontSize: 20,
    marginTop: '5%'
  },
  subText:{
    fontSize: 14
  },
  chevron:{
    marginLeft: '60%'
  },
  nchevron:{
    marginLeft: '50%'
  },
header:{
//  marginLeft: '40%',
 marginTop: '20%',
 textAlign: 'center',
 fontSize: 25
},
profileAccount:{
  width: 50,
  height: 50,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10%'
},
darkMode:{
  width: 50,
  height: 50,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems:'center',
  marginLeft: '9%'
}

});

export default SettingsScreen;