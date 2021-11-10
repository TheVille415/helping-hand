import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import AppText from '../components/AppText';
import { AppForm, AppFormField } from '../components/forms';
import ProfileImageInput from '../components/ProfileImageInput';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/themeContext';
import AppButton from '../components/AppButton';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from '../components/Profile';

const SettingsScreen = ({ navigation }) => {


  const theme = useContext(themeContext);

  const[mode, setMode] = useState(false);

  const [imageUri, setImageUri] = useState();
    const requestPermission = async () => {
        const { granted } =  await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted)
            alert('You need to enable permission to access libarary')
    }
    useEffect(() =>{
        requestPermission();
    },[])
 
  return (
<>
    <View style={styles.container}>
        <AppText style={[styles.header, {color: theme.color}]}>Settings</AppText>
        <AppText style={{color:theme.color}}>Account</AppText>
        <View style={styles.accountRow}>
            <Profile 
                imageUri={imageUri}
                style={[styles.profile, {backgroundColor: theme.black}]}
                />
            <View style={styles.nameC}>
            <AppText>Merissa B</AppText>
            <AppText>Personal Info</AppText>
            </View>
            <TouchableOpacity>
                <Icon name='chevron-right' color={theme.black} size={25}/>
            </TouchableOpacity>
        </View>

    </View>
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View
        style={{
          borderBottomColor: theme.light,
          borderBottomWidth: 1,
          marginTop: 5
        }}
      />
        <View style={styles.darkModeToggle}>
        <AppText style={{color: theme.color}}>Dark Mode</AppText>
        <Switch value = {mode} onValueChange = {(value) => {
            setMode(value)
            EventRegister.emit('changeTheme', value);
            }} />

        </View>

        <TouchableOpacity style={[styles.logout, {backgroundColor: theme.background},
    {borderColor: theme.error}]} onPress={() => 
                        navigation.navigate('Login')}>
            <View style={styles.logoutView}>
              <AppText style={[styles.logoutText, {color: theme.color}]}>Logout</AppText>
              <Icon style={{ marginLeft: 20 }}name='lock' size={20} color={theme.error}/>
            </View>
        </TouchableOpacity>
      </View>

    </>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
 accountRow:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginLeft: '15%',
    alignItems: 'center'
 },
 darkModeToggle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%'
 },
 nameC:{
    flex: 1,
    flexDirection: 'column'
 },
  logout:{
    marginLeft: '10%',
    marginTop: 25,
    width: '75%',
    height: '30%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  logoutView:{
    flexDirection: 'row',
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
footer:{
  flex: 1,
  borderRadius: 30,
  paddingVertical: '70%',
  paddingHorizontal: 30,
},
profile:{
  marginLeft: '53%',
  marginTop: '-8%',
  width: 35,
  height: 35,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
},
submit:{
  marginLeft: '70%',
  marginTop: '1%',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 30,
  borderRadius: 10,
}
});

export default SettingsScreen;