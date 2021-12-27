import React from 'react'
import { View, Text } from 'react-native'
import SearchStyles from './SearchStyle'
import Octicons from 'react-native-vector-icons/Octicons';

const SearchStyle = () => {
    return (
        <View style={SearchStyles.container}>
            <Octicons name="search" style={SearchStyles.searchIcon}/>
            <Text style={SearchStyles.searchText}>How can we help you today?</Text>
        </View>
    )
}

export default SearchStyle
