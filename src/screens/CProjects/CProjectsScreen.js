import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Style from './CProjectsScreenStyle'

//SCREENS
import {
    CustomerOnGoingProjects,
    CustomerDraftProjects,
    CustomerCompletedProjects
} from '../ProjectStatusScreens';


const Tab = createMaterialTopTabNavigator();

const CProjectsScreen = ({ route }) => {

    const navigation = useNavigation();
    const [draftProjects, setDraftProjects] = useState([]);

    const borderStyles = [{ borderBottomWidth: scale(2) }, { borderBottomWidth: scale(0) }]
    const textStyles = [{ fontWeight: 'bold' }, { fontWeight: 'normal' }]

    const [onGoingHighlight, setOnGoingHighlight] = useState(borderStyles[0]);
    const [onDraftHighlight, setDraftHighlight] = useState(borderStyles[1]);
    const [onCompletedHighlight, setCompletedHighlight] = useState(borderStyles[1]);

    const [onGoingTextHighlight, setOnGoingTextHighlight] = useState(textStyles[0]);
    const [onDraftTextHighlight, setDraftTextHighlight] = useState(textStyles[1]);
    const [onCompletedTextHighlight, setCompletedTextHighlight] = useState(textStyles[1]);

    const highlightNavitem = (navItemIndex) => {

        setOnGoingHighlight(borderStyles[1]);
        setDraftHighlight(borderStyles[1]);
        setCompletedHighlight(borderStyles[1]);

        setOnGoingTextHighlight(textStyles[1]);
        setDraftTextHighlight(textStyles[1]);
        setCompletedTextHighlight(textStyles[1]);


        if (navItemIndex === 0) {
            setOnGoingHighlight(borderStyles[0]);
            setOnGoingTextHighlight(textStyles[0]);
        }
        else if (navItemIndex === 1) {
            setDraftHighlight(borderStyles[0]);
            setDraftTextHighlight(textStyles[0]);
        }
        else if (navItemIndex === 2) {
            setCompletedHighlight(borderStyles[0]);
            setCompletedTextHighlight(textStyles[0]);
        }
    }

    const navigationAction = (screenName, navItemIndex) => {
        navigation.navigate(screenName);
        highlightNavitem(navItemIndex);
    }

    return (
        <View style={Style.container}>
            <Text style={Style.label}>Projects</Text>
            <View style={Style.navigations}>
                <TouchableOpacity style={[Style.navItem, onGoingHighlight]}
                    onPress={() => {
                        navigationAction('CustomerOnGoingProjects', 0);
                    }}>
                    <Text style={[Style.navLabel, onGoingTextHighlight]}>ON-GOING</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.navItem, onDraftHighlight]}
                    onPress={() => {
                        navigationAction('CustomerDraftProjects', 1);
                    }}>
                    <Text style={[Style.navLabel, onDraftTextHighlight]}>DRAFT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.navItem, onCompletedHighlight]}
                    onPress={() => {
                        navigationAction('CustomerCompletedProjects', 2);
                    }}>
                    <Text style={[Style.navLabel, onCompletedTextHighlight]}>COMPLETED</Text>
                </TouchableOpacity>
            </View>

            <Tab.Navigator keyboardDismissMode={'none'} initialRouteName='CustomerOnGoingProjects'
                screenOptions={{
                    tabBarStyle: { display: 'none' },
                    swipeEnabled: false
                }}>
                <Tab.Screen name='CustomerOnGoingProjects' component={CustomerOnGoingProjects} />
                <Tab.Screen name='CustomerDraftProjects' component={CustomerDraftProjects} />
                <Tab.Screen name='CustomerCompletedProjects' component={CustomerCompletedProjects} />
            </Tab.Navigator>
        </View>
    )
}

export default CProjectsScreen
