import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VolunteerHomeScreen from '../app/screens/VolunteerHomeScreen';
import colors from '../app/config/colors';
import AppText from '../app/components/AppText';
import LoginScreen from '../app/screens/LoginScreen';

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
                backgroundColor: colors.white
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
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
                    backgroundColor: colors.medium,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        > 
            <Tab.Screen name="News" 
            component={VolunteerHomeScreen} 
            options={{tabBarIcon: ({focused, size}) => (
                <>
                <MaterialCommunityIcons name='newspaper' color={focused ? colors.black : colors.white} size={42} style={styles.icon} />
                <Text
                style={{marginTop: 10, color: colors.white}}
                >NEWS</Text>
                </>
            ),
            headerShown: false
            }}
            />
            <Tab.Screen name="Home" component={LoginScreen} options={{
                tabBarIcon:({focused}) => (
                    <MaterialCommunityIcons name='account' color={ colors.medium } size={42}/>
                ),
                tabBarButton: (props) => (
                    <CustomProfileTabBarButton {...props} />
                )
                
            }}
            />
            <Tab.Screen name="Notifications" 
            component={VolunteerHomeScreen} 
            options={{
                tabBarIcon: ({focused, size}) => (
                    <>
                    <MaterialCommunityIcons name='bell-outline' color={focused ? colors.black : colors.white} size={42} style={styles.icon} />
                    <Text
                    style={{marginTop: 10, color: colors.white}}
                    >NOTIFICATIONS</Text>
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
