import React, { useRef, useState } from 'react'
import {View, ScrollView, ImageBackground, Text, Pressable, StatusBar} from 'react-native'
import Header from '../../components/CHomeScreen/Header/Header';
import WelcomeText from '../../components/CHomeScreen/Welcome/Welcome';
import Search from '../../components/CHomeScreen/Search/Search';
import CHomeScreenStyles from './CHomeScreenStyles'
import { scale } from 'react-native-size-matters';
import Categories from '../../components/CHomeScreen/Categories/Categories';
import PopularServices from '../../components/CHomeScreen/Categories/PopularServices';
import ProjectsToday from '../../components/CHomeScreen/ProjectsToday/ProjectsToday';
import BottomSheet from "react-native-raw-bottom-sheet";


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
                    // borderRadius={scale(15)}
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

           <BottomSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={'slide'}
                onOpen={() => changeStatusBarDisplay(1)}
                onClose={() => changeStatusBarDisplay(0)}
                customStyles={{
                wrapper: {
                    backgroundColor: "#eb6e65",
                },
                draggableIcon: {
                    backgroundColor: "#000"
                },
                container: {
                    height: '95%',
                    borderRadius: scale(15),
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }
                }}
            >

            </BottomSheet>

        </View>
    )
};

export default CHomeScreen;

