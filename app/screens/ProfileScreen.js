import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import { AppForm, AppFormField } from '../components/forms';
import ProfileImageInput from '../components/ProfileImageInput';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = ({ navigation }) => {

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
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.footer}>
      <ProfileImageInput 
        imageUri={imageUri}
        onChangeImage={uri => setImageUri(uri)}
        style={styles.profile}
      />
      <AppForm>
        <AppText>First Name</AppText>
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
        <AppText>Last Name</AppText>
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
          <AppText>Email</AppText>
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
          <AppButton style={styles.submit} title='Save' />
      </AppForm>

      <View
        style={{
          borderBottomColor: colors.light,
          borderBottomWidth: 1,
          marginTop: 5
        }}
      />

        <TouchableOpacity style={styles.edit} onPress={() => 
                        navigation.navigate('Certification')}>
        <AppText>Certifications</AppText>
        <Icon name='chevron-right' size={30} style={styles.chevron}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.noncEdit}>
        <AppText>Non-Certifications</AppText>
        <Icon name='chevron-right' size={30} style={styles.nchevron}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.password}>
          <View style={styles.logoutView}>
          <AppText style={styles.passwordText}>Change Password</AppText>
          <Icon style={{ marginLeft: 20 }} name='lock' size={20} color={colors.white}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout}>
            <View style={styles.logoutView}>
              <AppText style={styles.logoutText}>Logout</AppText>
              <Icon style={{ marginLeft: 20 }}name='lock' size={20} color={colors.red}/>
            </View>
        </TouchableOpacity>
      </View>

      
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.medium,
  },
  edit:{
    marginTop: 15,
    flexDirection: 'row',
  },
  noncEdit:{
    marginTop: 15,
    flexDirection: 'row',
  },
  password:{
    marginLeft: '10%',
    marginTop: 25,
    width: 280,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.medium,
    color: colors.white
  },
  passwordText:{
    color: colors.white
  },
  logout:{
    marginLeft: '10%',
    marginTop: 25,
    width: 280,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.red
  },
  logoutText:{
    color: colors.red
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
  backgroundColor: colors.medium,
  justifyContent: 'center',
  alignItems: 'center', 
},
footer:{
  flex: 1,
  backgroundColor: colors.white,
  borderRadius: 30,
  paddingVertical: 300,
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
  backgroundColor: colors.medium
},
submit:{
  marginLeft: '70%',
  marginTop: 5,
  backgroundColor: colors.medium,
  color: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 30,
  borderRadius: 10,
}
});

export default ProfileScreen;