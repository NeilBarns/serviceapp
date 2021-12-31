import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import DefaultSearchResultsStyle from './DefaultSearchResultsStyle';
import OtherServices from './OtherServices';
import RecentSearches from './RecentSearches';

const DefaultSearchResults = () => {

    const tempRecentSearches = [
        {
            id: 0,
            name: 'Painting'
        },
        {
            id: 1,
            name: 'Fence repair'
        },
        {
            id: 2,
            name: 'Carpentry'
        }
    ];
    const tempServiceList = [
        {
            id: 0,
            title: 'Handy Man',
            imageUrl: require('../../../../assets/handyman.jpg')
        },
        {
            id: 1,
            title: 'Cleaning',
            imageUrl: require('../../../../assets/cleaning.jpg')
        },
        {
            id: 2,
            title: 'Moving',
            imageUrl: require('../../../../assets/movers.jpg')
        },
        {
            id: 3,
            title: 'Mounting',
            imageUrl: require('../../../../assets/mounting.jpg')
        },
        {
            id: 4,
            title: 'Yardwork',
            imageUrl: require('../../../../assets/yardwork.jpg')
        },
        {
            id: 5,
            title: 'Electrical works',
            imageUrl: require('../../../../assets/electrical.jpg')
        },
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor:'white'}}>
                        <View style={DefaultSearchResultsStyle.recentSearchesContainer}>

                            <Text style={DefaultSearchResultsStyle.recentSearchesLabel}>Recent Searches</Text>

                            <RecentSearches data={tempRecentSearches} />
                            
                        </View>

                        <View style={DefaultSearchResultsStyle.otherServicesContainer}>

                            <Text style={DefaultSearchResultsStyle.otherServicesLabel}>Other services you might need</Text>

                            <OtherServices data={tempServiceList}/>
                            
                        </View>  
            </View>
        </ScrollView>
    )
}

export default DefaultSearchResults
