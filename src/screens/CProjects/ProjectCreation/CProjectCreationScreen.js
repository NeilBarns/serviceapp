import React, { useContext } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Style from './CProjectCreationScreenStyle';
import { changeStatusBarStyle } from '../../../components/general/StatusBar';
import { Ionicons } from '../../../components/general/Icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';
import useAsyncStorageOperation from '../../../hooks/Customer/useAsyncStorageOperation';
import Toast from 'react-native-root-toast';
import moment from 'moment';

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

    const { saveData } = useAsyncStorageOperation();

    const { id, service, imageUrl } = route.params;

    const navigation = useNavigation();

    const { taskDetailsChangesMade } = useContext(useTaskDetailChangesMadeContext);

    const { taskDateGlobal,
        taskTimeGlobal,
        taskDescriptionGlobal,
        taskMediaGlobal } = useContext(useTaskDetailsContext);

    const showToast = () => {
        let toast = Toast.show(
            <View style={Style.toastView}>
                <Ionicons name='alert-circle' style={Style.toastIcon} />
                <Text style={Style.toastLabel}>
                    Project saved as draft
                </Text>
            </View>, {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: '#d0e065',
            opacity: 1,
            delay: 0
        });

        setTimeout(function () {
            Toast.hide(toast);
        }, 5000);
    }

    const projectDrafting = () => {
        showToast();

        let draftTaskJSON = {
            serviceName: service,
            taskDate: taskDateGlobal,
            taskTime: taskTimeGlobal,
            taskDescription: taskDescriptionGlobal,
            taskMedia: taskMediaGlobal,
            taskCreated: moment(taskDateGlobal).calendar(),
            taskExpiry: moment().add(3, 'days').calendar()
        };

        saveData(draftTaskJSON);
    }

    return (
        <View style={Style.container}>

            <ImageBackground style={Style.coverImage} source={imageUrl}
                resizeMode='cover'>

                <TouchableOpacity
                    style={Style.backTouchableOpacity}
                    onPress={() => {
                        navigation.navigate('HomeStackScreen');

                        if (taskDetailsChangesMade) {
                            projectDrafting();
                        }

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
            </View>

        </View>
    )
}

export default CProjectCreationScreen
