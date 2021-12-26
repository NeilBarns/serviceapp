import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/CHomeScreen/Header/Header';
import WelcomeText from '../../components/CHomeScreen/Welcome/Welcome';
import CHomeScreenStyles from './CHomeScreenStyles'

const CHomeScreen = () => {
    return (
        <View style={CHomeScreenStyles.container}>
           <Header/>
           <WelcomeText />
        </View>
    )
};

export default CHomeScreen;

