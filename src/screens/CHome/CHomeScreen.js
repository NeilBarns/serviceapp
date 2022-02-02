import React, { useRef, useState } from 'react'
import {View, ScrollView, ImageBackground, Text, Pressable, StatusBar} from 'react-native'
import { scale } from 'react-native-size-matters';

import CHomeScreenStyles from './CHomeScreenStyles'

import Header from '../../components/CHomeScreen/Header/Header';
import WelcomeText from '../../components/CHomeScreen/Welcome/Welcome';
import Search from '../../components/CHomeScreen/Search/Search';
import Categories from '../../components/CHomeScreen/Categories/Categories';
import PopularServices from '../../components/CHomeScreen/Categories/PopularServices';
import ProjectsToday from '../../components/CHomeScreen/ProjectsToday/ProjectsToday';
import BottomSearchSheet from '../../components/CHomeScreen/Search/SearchComponents/BottomSearchSheet';
import {changeStatusBarStyle} from '../../components/general/StatusBar';

const CHomeScreen = () => {

    const refRBSheet = useRef();

    const statusBarColorsValues = ['#FAFAFA', '#eb6e65'];
    const statusBarStyleValues = ['dark-content', 'light-content'];

    const [statusBarBackground, setStatusBarBackground] = useState(statusBarColorsValues[0]);
    const [statusBarStyle, setStatusBarStyle] = useState(statusBarStyleValues[0]);
    


    function changeStatusBarDisplay(valueIndex = 0)
    {
        setStatusBarBackground(statusBarColorsValues[valueIndex]);
        setStatusBarStyle(statusBarStyleValues[valueIndex]);
        changeStatusBarStyle(false, statusBarColorsValues[valueIndex], statusBarStyleValues[valueIndex]);
    };

    return (
        <View style={CHomeScreenStyles.container}>

            <StatusBar 
            backgroundColor={statusBarBackground} 
            barStyle={statusBarStyle}
            showHideTransition={'fade'}
            />

           <View style={CHomeScreenStyles.headerContainer}>
                <Header/>
            </View>
           <ScrollView style={CHomeScreenStyles.welcomeContainer}
                       showsVerticalScrollIndicator={false}>
                <View style={{
                    paddingBottom: scale(15)
                }}>
                    <ImageBackground  
                    source={require('../../assets/bobsponge.jpg')}
                    resizeMode='cover' 
                    style={CHomeScreenStyles.welcomeSearchContainer}>

                        <WelcomeText />

                        <Pressable  style={CHomeScreenStyles.searchContainer} 
                                    onPress={() => (refRBSheet.current.open())}>
                            <Search />
                        </Pressable>

                        
                        
                    </ImageBackground>
                </View>

                <Text style={CHomeScreenStyles.categoryLabel}>Your projects today</Text>

                <View style={{marginBottom: scale(20)}}>
                    <ProjectsToday/>
                </View>

                <Text style={CHomeScreenStyles.categoryLabel}>Our services</Text>

                <View>
                    <Categories/>
                </View>

                <Text style={CHomeScreenStyles.categoryLabel}>Popular services</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
                            style={{marginBottom: scale(50)}}>
                    <PopularServices/>
                </ScrollView>

           </ScrollView>

           <BottomSearchSheet refRBSheet={refRBSheet} changeStatusBarDisplay={changeStatusBarDisplay}/>

        </View>
    )
};

export default CHomeScreen;

