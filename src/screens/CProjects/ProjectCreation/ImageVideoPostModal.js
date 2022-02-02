import React, {useEffect, useRef, useState} from 'react'
import {View, 
        Text, 
        Modal, 
        TextInput, 
        ImageBackground, 
        TouchableOpacity, 
        Pressable} from 'react-native'
import Style from './ImageVideoPostModalStyle'
import {MaterialCommunityIcons, Feather} from '../../../components/general/Icons'
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';

const ImageVideoPostModal = ({visible,
                              setImageVideoModalShow, 
                              tempimage,
                              imageType,
                              setPostedEntity}) => {  
    const imageUri = tempimage;
    
    const textInput = useRef(false);

    const [labelType, setLabelType] = useState();
    const [showImage, setShowImage] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [temp_image, setTemp_Image] = useState(tempimage);
    const [imageTypeLocal, setImageType] = useState(imageType);
    const [postDescription, setPostDescription] = useState();
    const [itemId, setItemId] = useState(0);

    const returnData = {
        id: itemId,
        entity: temp_image,
        type: imageTypeLocal,
        description: postDescription
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
        });

        if (!result.cancelled) {
            setTemp_Image(result.uri);
            setImageType(result.type);
            tempimage = result.uri;
            imageType = result.type;
        }
    };

    const showVideoContainer = () => {
        setShowVideo(true);
        setShowImage(false);
    }

    const showImageContainer = () => {
        setShowVideo(false);
        setShowImage(true);
    }

    const filePreparation = (setter = true) =>
    {
        if(setter)
        {
            setTemp_Image(tempimage);
            setImageType(imageType);
            setPostDescription('');
        }

        if(imageTypeLocal === 'video')
        {
            showVideoContainer();
            setLabelType('video');
        }
        else{
            showImageContainer();
            setLabelType('photo');
        }        
    }

    useEffect(() => {
        if(imageUri !== null)
        {
            setTimeout(function(){
                textInput.current.focus();
            }, 500);
        }
    }, [imageUri])

    useEffect(() => {
        filePreparation(false);
    }, [temp_image, imageTypeLocal])


    return (
        <Modal visible={visible}
                transparent={true}
                animationType={'slide'}
                statusBarTranslucent={true}
                onShow={() => filePreparation()}>
            <View style={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.label}>Tell us more</Text>
                    <View style={Style.modalCloser}>
                        <TouchableOpacity style={Style.postButton}
                                          onPress={() => {
                                            var idCreator = itemId;
                                            idCreator = idCreator + 1;
                                            setItemId(idCreator);
                                            setPostedEntity(returnData);
                                            setTimeout(function(){
     
                                                setImageVideoModalShow(false);
                                           
                                              }, 500);
                                          }}>
                            <Feather style={Style.postButtonIcon} name='send'/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.mainCard}>
                    <TextInput style={Style.documentation}
                            placeholder={`What's in this ${labelType}?`}
                            multiline
                            numberOfLines={4}
                            textAlignVertical={'top'}
                            ref={textInput}
                            onChangeText={text => setPostDescription(text)}>
                    </TextInput>

                    <View style={{
                        flex: 1
                    }}>
                        <Pressable style={Style.resetButton}>
                            <MaterialCommunityIcons name='file-replace-outline'
                                                    style={Style.resetButtonIcon}
                                                    onPress={() => pickImage()}></MaterialCommunityIcons>
                        </Pressable>
                    
                    {showImage === true &&
                    <ImageBackground style={Style.image} 
                    source={{ uri: temp_image }}
                    resizeMode={'cover'}
                    ></ImageBackground>
                    }
                    {showVideo === true &&
                     <Video
                        style={Style.video}
                        source={{
                        uri: temp_image,
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                    />
                    }
                    </View>
                </View>

                <View style={Style.continueTouchableOpacityContainer}>
                    <TouchableOpacity style={Style.continueTouchableOpacity}
                                    onPress={() => setImageVideoModalShow(false)}>
                        <Text style={Style.continueTouchableOpacityLabel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ImageVideoPostModal
