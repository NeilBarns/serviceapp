import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import BottomSheet from "react-native-raw-bottom-sheet";
import { scale } from 'react-native-size-matters';
import BottomSearchSheetStyle from './BottomSearchSheetStyle';
import SearchBox from './SearchBox';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultSearchResults from './DefaultSearchResults';
import SearchNavigation from '../../../../router/Customer/SearchNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilteredResults from './FilteredResults';


const BottomSearchSheet = ({refRBSheet, changeStatusBarDisplay, navigation, route }) => {

    const Tab = createMaterialTopTabNavigator();

    const tempRecentSearches = [
        {
            id: 0,
            name: 'Painting'
        },
        {
            id: 1,
            name: 'Fence repair'
        },
        {
            id: 2,
            name: 'Carpentry'
        }
    ];
    const tempServiceList = [
        {
            id: 0,
            title: 'Handy Man',
            imageUrl: require('../../../../assets/handyman.jpg')
        },
        {
            id: 1,
            title: 'Cleaning',
            imageUrl: require('../../../../assets/cleaning.jpg')
        },
        {
            id: 2,
            title: 'Moving',
            imageUrl: require('../../../../assets/movers.jpg')
        },
        {
            id: 3,
            title: 'Mounting',
            imageUrl: require('../../../../assets/mounting.jpg')
        },
        {
            id: 4,
            title: 'Yardwork',
            imageUrl: require('../../../../assets/yardwork.jpg')
        },
        {
            id: 5,
            title: 'Electrical works',
            imageUrl: require('../../../../assets/electrical.jpg')
        },
    ];

    return (
        <BottomSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                closeDuration={0}
                openDuration={0}
                animationType={'slide'}
                onOpen={() => changeStatusBarDisplay(1)}
                onClose={() => changeStatusBarDisplay(0)}
                customStyles={{
                wrapper: {
                    backgroundColor: "#eb6e65",
                },
                container: {
                    height: '98%',
                    borderRadius: scale(15),
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }
                }}
            >

                <View style={BottomSearchSheetStyle.container}>
                    <SearchBox refRBSheet={refRBSheet} />
                </View>

                <Tab.Navigator keyboardDismissMode={'none'} initialRouteName='DefaultSearchResults' 
                        screenOptions={{
                            tabBarStyle: { display: 'none' },
                            swipeEnabled: false
                        }}>
                    <Tab.Screen  name='DefaultSearchResults' component={DefaultSearchResults}/>
                    <Tab.Screen name='FilteredResults' component={FilteredResults} initialParams={{data: []}}/>
                </Tab.Navigator>

            </BottomSheet>
    )
}

export default BottomSearchSheet
