import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, Pressable} from 'react-native'
import {Entypo, Ionicons} from '../../../components/general/Icons'
import Style from './CProjectCreationImagesVideosStyle'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import ImageVideoPostModal from './ImageVideoPostModal'
import PostedItemsModal from './PostedItemsModal';
import ProjectCreatedModal from './ProjectCreatedModal';

const CProjectCreationImagesVideos = () => {

    const navigation = useNavigation();
    const [imageVideoModalShow, setImageVideoModalShow] = useState(false);
    const [postedItemModalShow, setPostedItemModalShow] = useState(false);
    const [projectCreatedModalShow, setProjectCreatedModalShow] = useState(false);

    const [temp_image, setTemp_Image] = useState(null);
    const [imageType, setImageType] = useState(null);

    const [postedEntity, setPostedEntity] = useState({});
    const [postCollection, setPostCollection] = useState([]);

    let posts = [];
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
        });

        if (!result.cancelled) {
            setTemp_Image(result.uri);
            setImageType(result.type);
        }
    };

    useEffect(() => {
        if(temp_image!== null)
        {
            setImageVideoModalShow(true)
        }
    }, [temp_image, imageType])


    useEffect(() => {
        posts = postCollection;
        posts.push(postedEntity);
        setPostCollection(posts);
    }, [postedEntity])

    const PostedItem = ({item}) => {
       let thumbNail = <View></View>;
        if(item.entity !== undefined)
        {
            if(item.type === 'video')
            {
                thumbNail = <VideoItem item={item}/>
            }
            else{
                thumbNail = <ImageItem item={item}/>
            }
        }
        return (thumbNail)
    }

    const VideoItem = ({item}) => {
        let thumbNail = <View></View>;
        thumbNail = <Pressable style={Style.postedItem}
                               onPress={() => setPostedItemModalShow(true)}>
                        <ImageBackground style={Style.postedItemThumbnail}
                                        source={{ uri: item.entity }}
                                        resizeMode={'cover'}>
                                            <Entypo name='controller-play' style={Style.playButton}/>
                        </ImageBackground>
                    </Pressable>
        return(thumbNail)
    }

    const ImageItem = ({item}) => {
        let thumbNail = <View></View>;
        thumbNail = <Pressable style={Style.postedItem}
                               onPress={() => setPostedItemModalShow(true)}>
                        <ImageBackground style={Style.postedItemThumbnail}
                                        source={{ uri: item.entity }}
                                        resizeMode={'cover'}
                        ></ImageBackground>
                    </Pressable>
        return(thumbNail)
    }

    return (
        <View style={Style.container}>

            <ImageVideoPostModal visible={imageVideoModalShow}
                                 setImageVideoModalShow={setImageVideoModalShow}
                                 tempimage={temp_image}
                                 imageType={imageType}
                                 setPostedEntity={setPostedEntity}/>

            <PostedItemsModal visible={postedItemModalShow}
                              setPostedItemModalShow={setPostedItemModalShow}
                              postedItemsCollection={postCollection}/>

            <ProjectCreatedModal visible={projectCreatedModalShow}
                                 setProjectCreatedModalShow={setProjectCreatedModalShow}/>

            <Text style={Style.labelStyle}>Post videos and images{"\n"}for workers to better visualize the problem</Text>

            <View style={Style.addPostContainer}>
                <TouchableOpacity style={Style.imageAdderButton}
                                    onPress={() => (pickImage())}>
                        <Entypo name="plus" style={Style.imageAdderIcon}/>
                        <Text>Add Image/Video</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={Style.mainContainer}>
                <View style={Style.imageContainer}>
                    {postCollection.map((item, id) => (
                        <PostedItem key={id} item={item}/>
                    ))}
                </View>
            </ScrollView>

            <View style={Style.continueTouchableOpacityContainer}>
                <TouchableOpacity style={Style.backTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationDescription'
                                  ))}
                                  >
                    <Ionicons name='chevron-back-sharp'
                              style={Style.backTouchableOpacityIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.continueTouchableOpacity}
                                  onPress={() => setProjectCreatedModalShow(true)}>
                    <Text style={Style.continueTouchableOpacityLabel}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CProjectCreationImagesVideos
