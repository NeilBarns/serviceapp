import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Pressable,
    ImageBackground
} from 'react-native'
import {
    EvilIcons,
    Ionicons,
    Entypo
} from '../../../components/general/Icons'
import Style from './CProjectFinalizeProjectStyle'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native'
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import PostedItemsModal from './PostedItemsModal';


const CProjectFinalizeProject = () => {

    const { taskDateGlobal, taskTimeGlobal, taskDescriptionGlobal, taskMediaGlobal } = useContext(useTaskDetailsContext);

    let taskDate = moment(taskDateGlobal).format('MMMM DD, YYYY');
    let taskDescription = taskDescriptionGlobal;
    let taskTime = taskTimeGlobal;
    let taskMedia = taskMediaGlobal;

    const [postedItemModalShow, setPostedItemModalShow] = useState(false);

    const navigation = useNavigation();


    const editDetailsNavigator = (navigateTo) => {
        if (navigateTo !== null) {
            navigation.navigate(navigateTo)
        }
    }

    const PostedItem = ({ item }) => {
        let thumbNail = <View></View>;
        if (item.entity !== undefined) {
            if (item.type === 'video') {
                thumbNail = <VideoItem item={item} />
            }
            else {
                thumbNail = <ImageItem item={item} />
            }
        }
        return (thumbNail)
    }

    const VideoItem = ({ item }) => {
        let thumbNail = <View></View>;
        thumbNail = <Pressable style={Style.postedItem}
            onPress={() => setPostedItemModalShow(true)}>
            <ImageBackground style={Style.postedItemThumbnail}
                source={{ uri: item.entity }}
                resizeMode={'cover'}>
                <Entypo name='controller-play' style={Style.playButton} />
            </ImageBackground>
        </Pressable>
        return (thumbNail)
    }

    const ImageItem = ({ item }) => {
        let thumbNail = <View></View>;
        thumbNail = <Pressable style={Style.postedItem}
            onPress={() => setPostedItemModalShow(true)}>
            <ImageBackground style={Style.postedItemThumbnail}
                source={{ uri: item.entity }}
                resizeMode={'cover'}
            ></ImageBackground>
        </Pressable>
        return (thumbNail)
    }

    return (
        <View style={Style.container}>

            <PostedItemsModal visible={postedItemModalShow}
                setPostedItemModalShow={setPostedItemModalShow}
                postedItemsCollection={taskMedia} />

            <Text style={Style.labelStyle}>Review your project details before posting it</Text>

            <ScrollView showsVerticalScrollIndicator={false} style={Style.otherDetails}>

                <View style={Style.mainDetails}>
                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='location' style={Style.detailsIcon} />
                            <Text>Master Bubble Laundry Shop</Text>
                        </View>
                        <View style={Style.detailsRight}>
                            <Text style={Style.editLabel}>Edit location</Text>
                        </View>
                    </View>

                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='calendar' style={Style.detailsIcon} />
                            <Text>{taskDate}</Text>
                        </View>
                        <Pressable style={Style.detailsRight} onPress={() => editDetailsNavigator('CustomerProjectCreationWhenWhere')}>
                            <Text style={Style.editLabel}>Edit date</Text>
                        </Pressable>
                    </View>

                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='clock' style={Style.detailsIcon} />
                            <Text>{taskTime}</Text>
                        </View>
                        <Pressable style={Style.detailsRight} onPress={() => editDetailsNavigator('CustomerProjectCreationWhenWhere')}>
                            <Text style={Style.editLabel}>Edit time</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={Style.documentation}>
                    <Text style={Style.docuText}>
                        {taskDescription}
                    </Text>
                    <Pressable style={Style.detailsRight} onPress={() => editDetailsNavigator('CustomerProjectCreationDescription')}>
                        <Text style={Style.editLabel}>Edit description</Text>
                    </Pressable>
                </View>
                <View style={Style.imageContainer}>
                    {taskMedia.map((item, id) => (
                        <PostedItem key={id} item={item} />
                    ))}
                </View>
            </ScrollView>
            <View style={Style.continueTouchableOpacityContainer}>

                <View style={Style.termsAndPrivacyContainer}>
                    <Text style={Style.termsAndPrivacyLabel}>By posting your project, you agree to our </Text>
                    <Text style={Style.termsAndPrivacyLabelHighlight}>Terms of Use </Text>
                    <Text style={Style.termsAndPrivacyLabel}>and </Text>
                    <Text style={Style.termsAndPrivacyLabelHighlight}>Privacy Policy</Text>
                </View>


                <View style={Style.mainContinueButtonContainer}>
                    <TouchableOpacity style={Style.backTouchableOpacity}
                        onPress={() => (navigation.navigate('CustomerProjectCreationImagesVideos'))}
                    >
                        <Ionicons name='chevron-back-sharp'
                            style={Style.backTouchableOpacityIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Style.continueTouchableOpacity}
                        //   onPress={() => setProjectCreatedModalShow(true)}>
                        onPress={() => (navigation.navigate('CustomerProjectFinalizeProject'))}>
                        <Text style={Style.continueTouchableOpacityLabel}>
                            Post project
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CProjectFinalizeProject;
