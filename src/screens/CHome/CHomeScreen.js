import React from 'react'
import {View, ScrollView, ImageBackground, Text } from 'react-native'
import Header from '../../components/CHomeScreen/Header/Header';
import WelcomeText from '../../components/CHomeScreen/Welcome/Welcome';
import Search from '../../components/CHomeScreen/Search/Search';
import CHomeScreenStyles from './CHomeScreenStyles'
import { scale } from 'react-native-size-matters';
import Categories from '../../components/CHomeScreen/Categories/Categories';
import PopularServices from '../../components/CHomeScreen/Categories/PopularServices';
import ProjectsToday from '../../components/CHomeScreen/ProjectsToday/ProjectsToday';


const CHomeScreen = () => {
    return (
        <View style={CHomeScreenStyles.container}>
           <View style={CHomeScreenStyles.headerContainer}>
                <Header/>
            </View>
           <ScrollView style={CHomeScreenStyles.welcomeContainer}
                       showsVerticalScrollIndicator={false}>
                <View style={{
                    padding: scale(15),
                }}>
                    <ImageBackground  
                    source={require('../../assets/clean.jpg')}
                    resizeMode='cover' 
                    borderRadius={scale(15)}
                    style={CHomeScreenStyles.welcomeSearchContainer}>
                        <WelcomeText />
                        <View style={CHomeScreenStyles.searchContainer}>
                            <Search />
                        </View>
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
           
        </View>
    )
};

export default CHomeScreen;

