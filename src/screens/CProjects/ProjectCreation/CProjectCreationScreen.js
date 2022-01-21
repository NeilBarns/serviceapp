import React, {useState} from 'react'
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Style from './CProjectCreationScreenStyle';
import {changeStatusBarStyle} from '../../../components/general/StatusBar';
import {Ionicons} from '../../../components/general/Icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//SCREENS
import {CustomerDefaultProjectCreationScreen, 
        CustomerProjectCreationWhenWhere,
        CustomerProjectCreationDescription,
        CustomerProjectCreationImagesVideos} from '../../ProjectCreationScreens'


const CProjectCreationScreen = ({route}) => {

    const Tab = createMaterialTopTabNavigator();

    const {id, service, imageUrl} = route.params;

    const navigation = useNavigation();

    return (
        <View style={Style.container}>

            <ImageBackground style={Style.coverImage} source={imageUrl}
                             resizeMode='cover'>

                <TouchableOpacity  
                    style={Style.backTouchableOpacity}
                    onPress={() => {
                            navigation.navigate('HomeStackScreen');
                            changeStatusBarStyle(false, '#FAFAFA', 'dark-content');
                        }}>
                            <Ionicons name="chevron-back-sharp" style={Style.backTouchableOpacityIcon}/>
                </TouchableOpacity>

                <View style={Style.curvature}></View>

            </ImageBackground>
            
            <View style={Style.detailsContainer}>

                <View style={Style.titleContainer}>
                    <Text style={Style.titleLabel}>{service}</Text>
                </View>
                

                <Tab.Navigator keyboardDismissMode={'none'} initialRouteName='CustomerDefaultProjectCreationScreen' 
                        screenOptions={{
                            tabBarStyle: { display: 'none' },
                            swipeEnabled: false
                        }}>
                    <Tab.Screen name='CustomerDefaultProjectCreationScreen' component={CustomerDefaultProjectCreationScreen} initialParams={{data: route.params}}/>
                    <Tab.Screen name='CustomerProjectCreationWhenWhere' component={CustomerProjectCreationWhenWhere}/>
                    <Tab.Screen name='CustomerProjectCreationDescription' component={CustomerProjectCreationDescription}/>
                    <Tab.Screen name='CustomerProjectCreationImagesVideos' component={CustomerProjectCreationImagesVideos}/>
                </Tab.Navigator>
            </View>

        </View>
    )
}

export default CProjectCreationScreen
