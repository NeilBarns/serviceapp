import React, { useContext, useEffect } from 'react'
import { View, Text, 
        ScrollView,
        Image, TouchableOpacity } from 'react-native'
import Style from './DefaultProjectCreationScreenStyle'
import { useNavigation } from '@react-navigation/native';
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';

const tempBadges = [
    {
        title: 'Good Bidder',
        description: 'Won bids\n3 consecutive times',
        imageUrl: require('../../../assets/goodbidder-256.png'),
        backgroundColor: '#679bd4'
    },

    {
        title: 'Fast Worker',
        description: 'Finished tasks less than\n3 hours 3 consecutive times',
        imageUrl: require('../../../assets/fastworker-256.png'),
        backgroundColor: '#ff63b0'
    },

    {
        title: 'Elite Worker',
        description: '5 consecutive 5 star\ncustomer ratings',
        imageUrl: require('../../../assets/elite-256.png'),
        backgroundColor: '#ed7253'
    }
];

const tempImages = [
    {
        images: require('../../../assets/bobsponge.jpg')
    },
    {
        images: require('../../../assets/movers.jpg')
    },
    {
        images: require('../../../assets/cleaning.jpg')
    },
    {
        images: require('../../../assets/carpentry.jpg')
    },
    {
        images: require('../../../assets/electrical.jpg')
    },
    {
        images: require('../../../assets/errands.jpg')
    },
]


const DefaultProjectCreationScreen = ({route}) => {

    const {id, description} = route.params.data;
    const setModalShow = route.params.modalShow;
    const setModalData = route.params.modalData;

    const navigation = useNavigation();

    const { actions } = useContext(useTaskDetailsContext);
    const { actions_changes } = useContext(useTaskDetailChangesMadeContext);

    useEffect(() => {
        actions({ type: 'setTaskDetailsDefault', payload: {  } });
        actions_changes({ type: 'noChanges' });
    }, [])

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>

            <Text style={Style.descriptionLabel}>{description}</Text>

                <View>
                    <ScrollView horizontal={true} 
                                showsHorizontalScrollIndicator={false}>

                        {tempImages.map((images, id) => (
                            <Image key={id} resizeMode='cover'
                            style={Style.serviceImages} source={images.images}/>

                        ))}
                        
                    </ScrollView>
                </View>

                <View>
                    <Text style={Style.badgesLabel}>
                        Tips on choosing{"\n"}your worker
                    </Text>

                    <Text style={Style.badgesDescriptionLabel}>
                        Badges are some additional criterias that may help
                        {"\n"}you choose workers along with bidding price
                    </Text>

                    <View style={Style.badgesContainer}>
                        <ScrollView horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                    style={Style.badgesView}>

                                {tempBadges.map((badges, id) => (
                                    <View key={id} style={[Style.badgesCard, {backgroundColor: badges.backgroundColor}]}>
                                        <View>
                                            <Text style={Style.badgeTitle}>
                                                {badges.title}
                                            </Text>
                                            <Text style={Style.badgeDescriptionLabel}>
                                                {badges.description}
                                            </Text>
                                        </View>

                                        <View style={Style.badgeIconContainer}>
                                            <Image key={id} 
                                                resizeMode='cover'
                                                style={Style.badgeIcon} 
                                                source={badges.imageUrl}/>
                                        </View>
                                    </View>
                                ))}

                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={Style.continueTouchableOpacityContainer}>
                <TouchableOpacity style={Style.continueTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationWhenWhere', {
                                      modalShow: setModalShow,
                                      modalData: setModalData
                                  }))}>
                    <Text style={Style.continueTouchableOpacityLabel}>Let's start!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default DefaultProjectCreationScreen
