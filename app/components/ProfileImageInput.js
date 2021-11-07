import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import theme from '../config/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

function ProfileImageInput({ imageUri, onChangeImage, ...otherprops }) {

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
return (
<>
  <View style={[styles.container, {backgroundColor: '#808080'}]}>
    {!imageUri && (
    <MaterialCommunityIcons color={theme.color} name="account" size={55} />
    )}
    {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
  </View>
  <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.changeImage} {...otherprops}>
            <MaterialCommunityIcons color={theme.color} name="pencil" size={15} />
        </View>
    </TouchableWithoutFeedback>

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
    height: 100,
    overflow: 'hidden',
    width:100
  },
  image:{
    width:'100%',
    height:'100%',
  }
});

export default ProfileImageInput;