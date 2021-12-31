import React from 'react'
import { View, Text } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import RecentSearchesStyle from './RecentSearchesStyle';

const RecentSearches = ({data}) => {
    return (
        <>
            {data.map((service, id) =>
                        (
                            <View style={RecentSearchesStyle.recentSearchesCard} 
                                  key={id}>
                                <View style={RecentSearchesStyle.recentSearchesIconContainer}>
                                    <Octicons name='project' style={RecentSearchesStyle.recentSearchesIcon} />
                                </View>
                                <Text>{service.name}</Text>
                            </View>
                        ))}
        </>
    )
}

export default RecentSearches
