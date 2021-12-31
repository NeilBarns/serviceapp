import React from 'react'
import { View, Text, ImageBackground} from 'react-native'
import OtherServicesStyle from './OtherServicesStyle'

const OtherServices = ({data}) => {
    return (
        <>
            {data.map((service, id) =>
                        (
                            <View style={OtherServicesStyle.otherServicesCard} key={id}>
                                <ImageBackground style={OtherServicesStyle.serviceImageContainer}
                                source={service.imageUrl}
                                resizeMode='cover'/>
                                <Text>{service.title}</Text>
                            </View>
                        ))}
        </>
    )
}

export default OtherServices
