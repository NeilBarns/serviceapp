import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { scale } from 'react-native-size-matters';
import { createStackNavigator } from '@react-navigation/stack';
import useTaskDetailChangesMadeContext from '../../hooks/Customer/useTaskDetailChangesMadeContext';
import useTaskDetailsChangesMadeGlobal from '../../hooks/Customer/useTaskDetailsChangesMadeGlobal';

//SCREENS
import {
    CustomerHomeScreen,
    CustomerProjectsScreen,
    CustomerInboxScreen,
    CustomerProfileScreen,
    CustomerProjectCreationScreen
} from '../../screens/MainScreens'


const HomeStack = createStackNavigator();

const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#eb6e65',
    tabBarStyle: {
        height: scale(50),
        padding: scale(5)
    }
};

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
    <Tab.Navigator initialRouteName='CustomerHomeScreen'
        screenOptions={screenOptions}
    >
        <Tab.Screen name='CustomerHomeScreen'
            component={CustomerHomeScreen}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Home</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="home" color={color} size={scale(20)} />
                ),

            }} />

        <Tab.Screen name='CProject'
            component={CustomerProjectsScreen}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Project</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="drawer" color={color} size={scale(20)} />
                ),
            }} />

        <Tab.Screen name='CInbox'
            component={CustomerInboxScreen}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Inbox</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="envelope" color={color} size={scale(20)} />
                ),
            }} />

        <Tab.Screen name='CProfile'
            component={CustomerProfileScreen}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Profile</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="user" color={color} size={scale(20)} />
                ),
            }} />

    </Tab.Navigator>
)




export default function ScreenNavigations() {

    const globalTaskDetailsChanges =  useTaskDetailsChangesMadeGlobal();
    
    return (
        <useTaskDetailChangesMadeContext.Provider value={globalTaskDetailsChanges}>
            <NavigationContainer>
                <HomeStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <HomeStack.Screen name="HomeStackScreen" component={HomeStackScreen} />
                    <HomeStack.Screen name="CustomerProjectCreationScreen" component={CustomerProjectCreationScreen} />
                </HomeStack.Navigator>
            </NavigationContainer>
        </useTaskDetailChangesMadeContext.Provider>
    );
}
