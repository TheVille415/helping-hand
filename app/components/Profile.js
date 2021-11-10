import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import themeContext from '../config/themeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

function Profile({ imageUri, onChangeImage, ...otherprops }) {

  useEffect(() =>{
    requestPermission();
},[])

  const requestPermission = async () => {
    const { granted } =  await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted)
        alert('You need to enable permission to access libarary')
}

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?',
    [{text: 'Yes', onPress: () => onChangeImage(null)},
    {text: 'No'},
  ])
}

  const selectImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images.Images,
          quality: 0.5
        });
        if(!result.cancelled)
            onChangeImage(result.uri)
    } catch (error) {
        console.log('Error reading your image', error)
    }
}

const theme = useContext(themeContext)
return (
<>
  <View style={[styles.container, {backgroundColor: theme.light}]}>
    {!imageUri && (
    <MaterialCommunityIcons color={theme.color} name="account" size={30} />
    )}
    {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
  </View>
</>
  );
}

const styles = StyleSheet.create({
  container:{
    marginLeft: '35%',
    marginTop: '-95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
    overflow: 'hidden',
    width:50
  },
  image:{
    width:'100%',
    height:'100%',
  }
});

export default Profile;