import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import HeaderStyles from './HeaderStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const Header = () => {
    return (
        <View style={HeaderStyles.container}>

            {/* LEFT SIDE OF THE HEADER */}
            <View style={HeaderStyles.locationContainer}>
                <Ionicons name="location-sharp" style={HeaderStyles.locationSharpIcon}/>
                <View style={HeaderStyles.locationText}>
                    <Text style={HeaderStyles.locationTextLabel}>Serving at</Text>
                    <View style={HeaderStyles.geoTextContainer}>
                        <Text style={HeaderStyles.geoText}>Master Bubble Laundry Shop</Text>
                        <Octicons name="triangle-down" style={HeaderStyles.triangleDownIcon}/>
                    </View>
                </View>
            </View>

            {/* RIGHT SIDE OF THE HEADER */}
            <View style={HeaderStyles.notificationContainer}>
                <TouchableOpacity style={HeaderStyles.roundedButton}>
                    <Ionicons name="notifications-outline" style={HeaderStyles.notificationsOutlineIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header
