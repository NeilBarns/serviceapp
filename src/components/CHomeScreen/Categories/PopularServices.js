import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PopularServicesStyles from './PopularServicesStyles'

const tempPopService = [
    {
        id: 0,
        title: 'Painting',
        imageUrl: require('../../../assets/painting.jpg'),
        cardColor: '#de5631',
        number: 19
    },
    {
        id: 1,
        title: 'Packing and unpacking',
        imageUrl: require('../../../assets/packing.jpg'),
        cardColor: '#ed3472',
        number: 20
    },
    {
        id: 2,
        title: 'Organization',
        imageUrl: require('../../../assets/organization.jpg'),
        cardColor: '#de9331',
        number: 21
    },
    {
        id: 3,
        title: 'Errands',
        imageUrl: require('../../../assets/errands.jpg'),
        cardColor: '#3170de',
        number: 22
    },
    {
        id: 4,
        title: 'Waiting in Line',
        imageUrl: require('../../../assets/queue.jpg'),
        cardColor: '#9931de',
        number: 23
    },
    {
        id: 5,
        title: 'Carpentry',
        imageUrl: require('../../../assets/carpentry.jpg'),
        cardColor: '#de31b3',
        number: 24
    }
]

const PopularServices = () => {
    return (
        <View style={PopularServicesStyles.container}>
            {tempPopService.map((service, id) => (
                <PopServiceCard key={id} 
                                imageUrl={service.imageUrl} 
                                title={service.title} 
                                number={service.number}
                                cardColor={service.cardColor}/>
            ))}
        </View>
    )
}

const PopServiceCard = (props) =>
{
    const cardBgColor = props.cardColor;

    return <TouchableOpacity activeOpacity={1} 
                             style={PopularServicesStyles.popServiceCard}>
    <Image  style={PopularServicesStyles.popServiceImage}
            source={props.imageUrl}
            resizeMode='cover'    
    />
    <View style={[PopularServicesStyles.popDetails, {backgroundColor: cardBgColor}]}>
        <Text style={PopularServicesStyles.popServiceTitle}>{props.title}</Text>
        <Text style={PopularServicesStyles.popServiceNumber}>{props.number} number of services</Text>
    </View>
</TouchableOpacity>
}

export default PopularServices
