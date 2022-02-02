import React, { useContext, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Style from './CProjectCreationScreenStyle';
import { changeStatusBarStyle } from '../../../components/general/StatusBar';
import { Ionicons } from '../../../components/general/Icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailsGlobal from '../../../hooks/Customer/useTaskDetailsGlobal';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';
import Toast from 'react-native-root-toast';

//SCREENS
import {
    CustomerDefaultProjectCreationScreen,
    CustomerProjectCreationWhenWhere,
    CustomerProjectCreationDescription,
    CustomerProjectCreationImagesVideos,
    CustomerProjectFinalizeProject
} from '../../ProjectCreationScreens'


const CProjectCreationScreen = ({ route }) => {

    const Tab = createMaterialTopTabNavigator();

    const { id, service, imageUrl } = route.params;

    const navigation = useNavigation();

    const globalTaskDetails = useTaskDetailsGlobal();

    const { taskDetailsChangesMade } = useContext(useTaskDetailChangesMadeContext);

    return (
        <View style={Style.container}>

            <ImageBackground style={Style.coverImage} source={imageUrl}
                resizeMode='cover'>

                <TouchableOpacity
                    style={Style.backTouchableOpacity}
                    onPress={() => {
                        navigation.navigate('HomeStackScreen');
                        console.log(taskDetailsChangesMade);

                        let toast = Toast.show(<View style={{
                            justifyContent: 'flex-end',
                            width: '100%'
                        }}>
                            <Ionicons name='airplane-outline'/>
                            <Text>
                                This is a message
                            </Text>
                        </View>, {
                            duration: Toast.durations.LONG,
                            position: Toast.positions.BOTTOM,
                            shadow: true,
                            animation: true,
                            hideOnPress: true,
                            delay: 0
                        });

                        // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
                        setTimeout(function () {
                            Toast.hide(toast);
                        }, 5000);

                        changeStatusBarStyle(false, '#FAFAFA', 'dark-content');
                    }}>
                    <Ionicons name="chevron-back-sharp" style={Style.backTouchableOpacityIcon} />
                </TouchableOpacity>

                <View style={Style.curvature}></View>

            </ImageBackground>

            <View style={Style.detailsContainer}>

                <View style={Style.titleContainer}>
                    <Text style={Style.titleLabel}>{service}</Text>
                </View>

                <useTaskDetailsContext.Provider value={globalTaskDetails}>
                    <Tab.Navigator keyboardDismissMode={'none'} initialRouteName='CustomerDefaultProjectCreationScreen'
                        screenOptions={{
                            tabBarStyle: { display: 'none' },
                            swipeEnabled: false
                        }}>
                        <Tab.Screen name='CustomerDefaultProjectCreationScreen' component={CustomerDefaultProjectCreationScreen} initialParams={{ data: route.params }} />
                        <Tab.Screen name='CustomerProjectCreationWhenWhere' component={CustomerProjectCreationWhenWhere} />
                        <Tab.Screen name='CustomerProjectCreationDescription' component={CustomerProjectCreationDescription} />
                        <Tab.Screen name='CustomerProjectCreationImagesVideos' component={CustomerProjectCreationImagesVideos} />
                        <Tab.Screen name='CustomerProjectFinalizeProject' component={CustomerProjectFinalizeProject} />
                    </Tab.Navigator>
                </useTaskDetailsContext.Provider>


            </View>

        </View>
    )
}

export default CProjectCreationScreen
