import React from 'react'
import { View, Text } from 'react-native'
import WelcomeStyles from './WelcomeStyles'

const WelcomeText = () => {
    return (
        <View style={WelcomeStyles.container}>
            <Text style={WelcomeStyles.welcomeText}>Find services</Text>
            <Text style={WelcomeStyles.welcomeText}>around you</Text>
        </View>
    )
}

export default WelcomeText
