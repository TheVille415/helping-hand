import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../components/AppText';
import themeContext from '../../config/themeContext';

function VolunteerHomeScreen(props) {

  const theme = useContext(themeContext);
return (
    <>
    <View style={[styles.container], {backgroundColor: theme.background}}>
      <AppText style={[styles.rateText, {color: theme.color}]}> Rating</AppText>
      <View style={[styles.rating, {backgroundColor: theme.yellow}]}>
          <AppText style={[styles.ratingText, {color:theme.black}]}> 4.7</AppText>
      </View>
      <AppText style={[styles.headerText, {color: theme.color}]}>Hello, Brian </AppText>
      <View style={[styles.week, {backgroundColor: theme.primary}]}>
          <AppText style={[styles.weekTextHeader, {color:theme.white}]}>People you've helped this week:</AppText>
          <AppText style={[styles.weekText, {color:theme.white}]}> 10 People</AppText>
      </View>
      <View style={[styles.week, {backgroundColor: theme.green}]}>
          <AppText style={[styles.weekTextHeader, {color:theme.white}]}>Total people helped:</AppText>
          <AppText style={[styles.weekText, {color:theme.white}]}> 30 People</AppText>
      </View>
      <View style={[styles.week, {backgroundColor: theme.primary}]}>
          <AppText style={[styles.weekTextHeader, {color:theme.white}]}>Acceptance Rate %</AppText>
          <AppText style={[styles.weekText, {color:theme.white}]}> 80%</AppText>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 36,
    marginTop: '5%'
  },
  week:{
    height: '15%',
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
    borderRadius: 10
  },
  weekTextHeader:{
    textAlign: 'center',
    fontSize: 23,
    marginTop: '2%'
  },
  weekText:{
    textAlign: 'center',
    fontSize: 36,
    marginTop: '2%'
  },
  rating:{
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: '3%',
    marginLeft: '80%'
  },
  rateText:{
    marginTop: '20%',
    marginLeft: '75%',
    fontSize: 24
  },
  ratingText:{
    textAlign: 'center',
    marginTop: '30%'
  }

});

export default VolunteerHomeScreen;