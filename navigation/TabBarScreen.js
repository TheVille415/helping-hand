import React, { useContext } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VolunteerHomeScreen from '../app/screens/VolunteerHomeScreen';
import themeContext from '../app/config/themeContext';
import theme from '../app/config/theme';
import AppText from '../app/components/AppText';
import LoginScreen from '../app/screens/LoginScreen';
import ProfileScreen from '../app/screens/ProfileScreen';
import NewsScreen from '../app/screens/NewsScreen';
import NotificationScreen from '../app/screens/NotificationScreen';
import MessagesScreen from '../app/screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const CustomProfileTabBarButton = ({ focused, children, onPress}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: theme.background
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
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: theme.primary,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        > 
        <Tab.Screen name="Home" 
            component={VolunteerHomeScreen} 
            options={{tabBarIcon: ({focused, size}) => (
                <>
                <MaterialCommunityIcons name='home' color={theme.background} size={30} style={styles.icon} />
                <Text
                style={{marginTop: 10, color: theme.white, fontSize: 12}}
                >HOME</Text>
                </>
            ),
            headerShown: false
            }}
            />
            <Tab.Screen name="News" 
            component={NewsScreen} 
            options={{tabBarIcon: ({focused, size}) => (
                <>
                <MaterialCommunityIcons name='newspaper' color={theme.background} size={30} style={styles.icon} />
                <Text
                style={{marginTop: 10, color: theme.white, fontSize: 12}}
                >NEWS</Text>
                </>
            ),
            headerShown: false
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon:({focused}) => (
                    <MaterialCommunityIcons name='account' color={ theme.color } size={30}/>
                ),
                tabBarButton: (props) => (
                    <CustomProfileTabBarButton {...props} />
                ),
                tabBarVisible: false,

            headerShown: false
            }}
            />
            <Tab.Screen name="Notifications" 
            component={NotificationScreen} 
            options={{
                tabBarIcon: ({focused, size}) => (
                    <>
                    <MaterialCommunityIcons name='bell-outline' color={theme.background} size={25} style={styles.icon} />
                    <Text
                    style={{marginTop: 10, color: theme.white, fontSize: 12}}
                    >REQUESTS</Text>
                    </>
                ),
                headerShown: false
                }}
                />
                <Tab.Screen name="Messages" 
                    component={MessagesScreen} 
                    options={{tabBarIcon: ({focused, size}) => (
                        <>
                        <MaterialCommunityIcons name='message-text-outline' color={theme.background} size={25} style={styles.icon} />
                        <Text
                        style={{marginTop: 10, color: theme.white, fontSize: 12}}
                        >MESSAGES</Text>
                        </>
                    ),
                    headerShown: false
                    }}
                />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    icon:{
        marginTop: 23
    }

})

export default Tabs;
