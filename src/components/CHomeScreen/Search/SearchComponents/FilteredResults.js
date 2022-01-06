import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import FilteredResultsStyle from './FilteredResultsStyle';
import { useNavigation } from '@react-navigation/native';
import {changeStatusBarStyle} from '../../../general/StatusBar';

const FilteredResults = ({ route }) => {

    const {data, ref: refRBSheet} = route.params;
    const navigation = useNavigation();
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
                                    <TouchableOpacity style={FilteredResultsStyle.searchedServiceCard} 
                                            key={id}
                                            onPress={() => {

                                                refRBSheet.current.close();
                                                
                                                navigation.navigate('CustomerProjectCreationScreen', 
                                                {
                                                    id: service.id,
                                                    service: service.title,
                                                    description: service.description,
                                                    imageUrl: service.imageUrl
                                                });

                                                setTimeout(function(){
 
                                                    changeStatusBarStyle(true, 'transparent');
                                               
                                                  }, 1000);

                                                
                                            }}>
                                        <View style={FilteredResultsStyle.searchedServiceIconContainer}>
                                                <Octicons name='project' style={FilteredResultsStyle.searchedServiceIcon} />
                                        </View>
                                        <Text>{service.title}</Text>
                                    </TouchableOpacity>
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
