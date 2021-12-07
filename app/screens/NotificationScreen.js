import React, {useContext} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import themeContext from '../config/themeContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function NotificationScreen(props) {

  const theme = useContext(themeContext);
return (
  <>
  <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.color}]}>REQUESTS</Text>
      {/* REQUEST ROW */}
    <View style={styles.row}>
      <View style={[styles.profileAccount, {backgroundColor: theme.green}]}>
        <Icon name='account' size={40}/>
      </View>
      <AppText style={styles.profileText}>Brian253</AppText>
      {/* ESTIMATED TIME COLUMN */}
      <View style={styles.column}>
        <AppText style={styles.eta}>ETA</AppText>
        <AppText style={styles.time}>6-9 min</AppText>
      </View>
      {/* END OF ROW */}
    </View>
    <AppText style={styles.requestText}>Got car broken into and need someone to wait with me while I wait for the police to show up</AppText>
    <AppButton 
      title="Accept" 
      style={[styles.request, {backgroundColor: theme.primary}]}
      onPress={() => 
         navigation.navigate('SignUp')}
      />
      <AppButton 
      title="Skip" 
      style={[styles.decline, {borderColor: theme.error}]}
      onPress={() => 
         navigation.navigate('SignUp')}
      />

    <View style={{borderBottomColor: theme.black, borderBottomWidth: 1}}>

    </View>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    display: 'flex',
    textAlign: 'center',
    marginTop: '20%',
},
profileAccount:{
  width: 50,
  height: 50,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '10%',
  marginTop:'10%'
},
profileText:{
  marginLeft: '3%',
  fontSize: 14,
  marginTop:'10%'
}, 
column:{
  marginLeft: '40%',
  alignItems: 'center',
  marginTop:'10%'
},
acceptColumn: {
  flexDirection: 'column'
},
eta:{
  fontWeight: 'bold',
  fontSize: 14,
},
time:{
  fontSize: 16,
},
row:{
  flexDirection: 'row'
},
requestText:{
  width: '70%',
  marginLeft: '25%',
  fontSize: 15
},
request:{
  width: '25%',
  alignItems: 'center',
  marginLeft: '70%',
  borderRadius: 7
},
decline:{
  width: '25%',
  alignItems: 'center',
  marginLeft: '70%',
  borderRadius: 7
}
});

export default NotificationScreen;