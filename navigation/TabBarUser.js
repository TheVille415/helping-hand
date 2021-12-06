import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../app/config/themeContext';
import theme from '../app/config/theme';
import HomeScreen from '../app/screens/Users/HomeScreen';
import NotificationScreen from '../app/screens/NotificationScreen';
import SettingsScreen from '../app/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomProfileTabBarButton = ({ focused, children, onPress}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={{
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 35,
                backgroundColor: theme.white,
                alignContent: 'center',
                justifyContent: 'center'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {

    const theme = useContext(themeContext); 
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: theme.primary,
                    height: '13%',
                    ...styles.shadow
                }
            }}
        > 
        <Tab.Screen name="Home" 
            component={HomeScreen} 
            options={{tabBarIcon: ({focused, size}) => (
                <>
                <MaterialCommunityIcons name='home' color={theme.background} size={30} style={styles.icon} />
                <Text
                style={{marginTop: 10, color: theme.background, fontSize: 12}}
                >HOME</Text>
                </>
            ),
            headerShown: false
            }}
            />
            <Tab.Screen name="Settings" 
            component={SettingsScreen} 
            options={{tabBarIcon: ({focused, size}) => (
                <>
                <MaterialCommunityIcons name='newspaper' color={theme.background} size={30} style={styles.iconN} />
                <Text
                style={{marginLeft: -50, marginTop: 10, color: theme.background, fontSize: 12}}
                >NEWS</Text>
                </>
            ),
            headerShown: false
            }}
            />
            <Tab.Screen name="Settings" component={NotificationScreen} options={{
                tabBarIcon:({focused}) => (
                    <>
                    <MaterialCommunityIcons name='account-cog' color={ theme.background } size={30} style={styles.iconS}/>
                    <Text
                style={{marginLeft: -40, marginTop: 10, color: theme.background, fontSize: 12}}
                >SETTINGS</Text>
                </>
                ),
                tabBarButton: (props) => (
                    <CustomProfileTabBarButton {...props} />
                ),
                tabBarVisible: false,

            headerShown: false
            }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    icon:{
        marginTop: 23,
    },
    iconN:{
        marginTop: 23,
        marginLeft: -50 
    },
    iconS:{
        marginTop: 23,
        marginLeft: -40 
    }

})

export default Tabs;
