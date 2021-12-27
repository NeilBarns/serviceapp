import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import WelcomeStyles from './WelcomeStyles'

const WelcomeText = () => {
    return (
        <View
            // source={require('../../../assets/service-removebg.png')} 
            // source={require('../../../assets/tools.png')} 
            // resizeMode='contain'
            style={WelcomeStyles.container}>
            
            <Text style={WelcomeStyles.welcomeText}>Find services</Text>
            <Text style={WelcomeStyles.welcomeText}>around you</Text>
        </View>
    )
}

export default WelcomeText
