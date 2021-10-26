import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
// import Animated from 'react-native-reanimated';


// bs = React.createRef();
// fall = new Animated.Value(1);

function NotificationScreen(props) {
return (
  <View style={styles.container}>
      <Text style={styles.text}>REQUESTS</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  text:{
    display: 'flex',
    marginTop: '50%',
    marginLeft: '40%'
}
});

export default NotificationScreen;