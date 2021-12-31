import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { scale } from 'react-native-size-matters';

//SCREENS
import CHomeScreen from '../../screens/CHome/CHomeScreen';
import CProjectsScreen from '../../screens/CProjects/CProjectsScreen';
import CInboxScreen from '../../screens/CInbox/CInboxScreen';
import CProfileScreen from '../../screens/CProfile/CProfileScreen';

export default function BottomTabNavigation()
{
    const screenOptions = {
        headerShown: false,
        tabBarActiveTintColor: '#eb6e65',
        tabBarStyle:{
            height: scale(50),
            padding: scale(5)
        },
        
    };
  
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator  initialRouteName='CHome'
                            screenOptions={screenOptions}
                            >
                <Tab.Screen name='CHome' 
                            component={CHomeScreen}
                            options={{
                                tabBarLabel: ({focused}) => (
                                    <Text style={{
                                        fontWeight: focused ? 'bold' : 'normal',
                                        fontSize: scale(10),
                                        marginBottom: 9
                                    }}>Home</Text>
                                ),
                                tabBarIcon: ({color, size}) =>
                                (
                                    <SimpleLineIcons name="home" color={color} size={scale(20)}/>
                                ),
                                
                            }}/>

                <Tab.Screen name='CProject' 
                            component={CProjectsScreen}
                            options={{
                                tabBarLabel: ({focused}) => (
                                    <Text style={{
                                        fontWeight: focused ? 'bold' : 'normal',
                                        fontSize: scale(10),
                                        marginBottom: 9
                                    }}>Project</Text>
                                ),
                                tabBarIcon: ({color, size}) =>
                                (
                                    <SimpleLineIcons name="drawer" color={color} size={scale(20)}/>
                                ),
                            }}/>

                <Tab.Screen name='CInbox' 
                            component={CInboxScreen}
                            options={{
                                tabBarLabel: ({focused}) => (
                                    <Text style={{
                                        fontWeight: focused ? 'bold' : 'normal',
                                        fontSize: scale(10),
                                        marginBottom: 9
                                    }}>Inbox</Text>
                                ),
                                tabBarIcon: ({color, size}) =>
                                (
                                    <SimpleLineIcons name="envelope" color={color} size={scale(20)}/>
                                ),
                            }}/>

                <Tab.Screen name='CProfile' 
                            component={CProfileScreen}
                            options={{
                                tabBarLabel: ({focused}) => (
                                    <Text style={{
                                        fontWeight: focused ? 'bold' : 'normal',
                                        fontSize: scale(10),
                                        marginBottom: 9
                                    }}>Profile</Text>
                                ),
                                tabBarIcon: ({color, size}) =>
                                (
                                    <SimpleLineIcons name="user" color={color} size={scale(20)}/>
                                ),
                            }}/>
                            
            </Tab.Navigator>
        </NavigationContainer>
    );
}
