import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import AppText from '../../components/AppText';
import { AppForm, AppFormField } from '../../components/forms';
import ProfileImageInput from '../../components/ProfileImageInput';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../../config/themeContext';
import AppButton from '../../components/AppButton';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = ({ navigation }) => {


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
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={[styles.header, {backgroundColor: theme.primary}]}>

      </View>
      <View style={[styles.footer, {backgroundColor: theme.background}]}>
      <ProfileImageInput 
        imageUri={imageUri}
        onChangeImage={uri => setImageUri(uri)}
        style={[styles.profile, {backgroundColor: theme.primary}]}
      />
      <AppForm>
        <AppText style={{color: theme.color}}>First Name</AppText>
        {/* FName input field */}
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          keyboardType='default'
          name='name'
          textContentType='name'
          style={styles.input}
          />
        <AppText style={{color: theme.color}}>Last Name</AppText>
        {/* LName input field */}
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          keyboardType='default'
          name='name'
          textContentType='name'
          style={styles.input}
          />
          <AppText style={{color: theme.color}}>Email</AppText>
          {/* Email input field */}
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='name'
          textContentType='emailAddress'
          style={styles.input}
          />
          <AppButton style={[styles.submit, {backgroundColor: theme.primary}]} title='Save' />
      </AppForm>

      <View
        style={{
          borderBottomColor: theme.light,
          borderBottomWidth: 1,
          marginTop: 5
        }}
      />

        <TouchableOpacity style={styles.edit} onPress={() => 
                        navigation.navigate('Certification')}>
        <AppText style={{color: theme.color}}>Certifications</AppText>
        <Icon name='chevron-right' size={30} color={theme.color} style={styles.chevron}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.noncEdit}>
        <AppText style={{color: theme.color}}>Non-Certifications</AppText>
        <Icon name='chevron-right' size={30} color={theme.color} style={styles.nchevron}/>
        </TouchableOpacity>

        <AppText style={{color: theme.color}}>Dark Mode</AppText>
        <Switch value = {mode} onValueChange = {(value) => {
            setMode(value)
            EventRegister.emit('changeTheme', value);
            }} />

        <TouchableOpacity style={[styles.logout, {backgroundColor: theme.background},
    {borderColor: theme.error}]} onPress={() => 
                        navigation.navigate('Login')}>
            <View style={styles.logoutView}>
              <AppText style={[styles.logoutText, {color: theme.color}]}>Logout</AppText>
              <Icon style={{ marginLeft: 20 }}name='lock' size={20} color={theme.error}/>
            </View>
        </TouchableOpacity>
      </View>

      
    </View>
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
  // password:{
  //   marginLeft: '10%',
  //   marginTop: '5%',
  //   width: '75%',
  //   height: '30%',
  //   borderRadius: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: theme.primary,
  //   color: theme.color
  // },
  // passwordText:{
  //   color: theme.color
  // },
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
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center', 
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

export default ProfileScreen;