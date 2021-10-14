import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function VolunteerHomeScreen(props) {
return (
  <>
    <MapView   style={{flex: 1}} region={{ 
        latitude: 119.4179, 
        longitude: 36.7783, 
        latitudeDelta: 0.01, 
        longitudeDelta: 0.01 }}        
        showsUserLocation={true}      
        /> 
    </>
  );
}

const styles = StyleSheet.create({
  container:{}
});

export default VolunteerHomeScreen;