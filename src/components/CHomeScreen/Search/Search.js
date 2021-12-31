import React from 'react'
import { View, Text } from 'react-native'
import SearchStyles from './SearchStyle'
import Octicons from 'react-native-vector-icons/Octicons';

const Search = () => {
    return (
        <View style={SearchStyles.container} onPress={()=> {
        }}>
            <Octicons name="search" style={SearchStyles.searchIcon}/>
            <Text style={SearchStyles.searchText}>How can we help you today?</Text>
        </View>
    )
}

export default Search
