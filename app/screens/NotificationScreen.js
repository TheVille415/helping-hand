import React, {useContext} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import themeContext from '../config/themeContext';
// import Animated from 'react-native-reanimated';


// bs = React.createRef();
// fall = new Animated.Value(1);

function NotificationScreen(props) {

  const theme = useContext(themeContext);
return (
  <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.color}]}>REQUESTS</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    display: 'flex',
    marginTop: '50%',
    marginLeft: '40%'
}
});

export default NotificationScreen;