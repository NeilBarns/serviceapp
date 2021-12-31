import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import FilteredResultsStyle from './FilteredResultsStyle';

const FilteredResults = ({ route }) => {

    const data = route.params.data;
    var card = <View style={{backgroundColor: 'white'}}></View>;
    
    if(data.length > 0)
    {
        try{
            if(data[0].title.length > 0)
            {
                card = <ScrollView showsVerticalScrollIndicator={false} style={FilteredResultsStyle.searchedServicesContainer}>
                            <View style={{backgroundColor:'white'}}>
                                {data.map((service, id) =>
                                (
                                    <View style={FilteredResultsStyle.searchedServiceCard} 
                                            key={id}>
                                        <View style={FilteredResultsStyle.searchedServiceIconContainer}>
                                                <Octicons name='project' style={FilteredResultsStyle.searchedServiceIcon} />
                                        </View>
                                        <Text>{service.title}</Text>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>;
            }
        }
        catch{}
    }
    
    return (
        card
    )

}

export default FilteredResults
