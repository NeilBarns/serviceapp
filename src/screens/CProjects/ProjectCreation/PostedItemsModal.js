import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native'
import Style from './PostedItemsModalStyle'
import {Feather} from '../../../components/general/Icons'
import { Video } from 'expo-av';
import DeleteItemModal from './DeleteItemModal';
import EditItemModal from './EditItemModal';

const PostedItemsModal = ({visible, 
                           setPostedItemModalShow, 
                           postedItemsCollection}) => {


    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const modalCloser = () => {
        setPostedItemModalShow(false);
    }

    const deleteItem = ({item}) => {
        setSelectedItem(item);
        setDeleteModalShow(true);
    }

    const editItem = ({item}) => {
        setSelectedItem(item);
        setEditModalShow(true);
    }

    const PostItem = ({item}) => {

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

        return(thumbNail)
    }
    
    const VideoItem = ({item}) => {
        let thumbNail = <View></View>;
        thumbNail = <View style={Style.itemCard}>
                        <View style={Style.cardControl}>
                            <Pressable style={Style.cardControlButton}
                                onPress={() => editItem({item})}>
                                <Feather style={Style.cardControlIcon}
                                    name='edit'/>
                            </Pressable>
                            <Pressable style={Style.cardControlButton}
                                onPress={() => deleteItem({item})}>
                                <Feather style={Style.cardControlIcon}
                                    name='delete'/>
                            </Pressable>
                        </View>
                        <View style={Style.fileContainer}>
                            <Video
                                style={Style.file}
                                source={{
                                uri: item.entity,
                                }}
                                useNativeControls
                                resizeMode="cover"
                                isLooping
                            />
                        </View>
                        <View style={Style.descriptionContainer}>
                            <Text>{item.description}</Text>
                        </View>
                    </View>
        return(thumbNail)
    }

    const ImageItem = ({item}) => {
        let thumbNail = <View></View>;
        thumbNail = <View style={Style.itemCard}>
                        <View style={Style.cardControl}>
                            <Pressable style={Style.cardControlButton}
                                       onPress={() => editItem({item})}>
                                <Feather style={Style.cardControlIcon}
                                    name='edit'/>
                            </Pressable>
                            <Pressable style={Style.cardControlButton}
                                onPress={() => deleteItem({item})}>
                                <Feather style={Style.cardControlIcon}
                                    name='delete'/>
                            </Pressable>
                        </View>
                        <View style={Style.fileContainer}>
                            <Image style={Style.file} 
                                resizeMode={'contain'}
                                source={ {uri: item.entity}}/>
                        </View>
                        <View style={Style.descriptionContainer}>
                            <Text>{item.description}</Text>
                        </View>
                    </View>
        return(thumbNail)
    }

    return (
        <Modal visible={visible}
                transparent={true}
                animationType={'slide'}
                statusBarTranslucent={true}
                >

            <DeleteItemModal visible={deleteModalShow}
                             setDeleteModalShow={setDeleteModalShow}
                             selectedItem={selectedItem}
                             postedItemsCollection={postedItemsCollection}
                             setPostedItemModalShow={setPostedItemModalShow}/>

            <EditItemModal visible={editModalShow}
                             setEditModalShow={setEditModalShow}
                             selectedItem={selectedItem}
                             postedItemsCollection={postedItemsCollection}/>

            <View style={Style.container}>
                <View style={Style.header}>
                    <TouchableOpacity style={Style.backButton}
                                      onPress={() => modalCloser()}>
                        <Feather style={Style.backButtonIcon}
                                 name='arrow-left'/>
                    </TouchableOpacity>
                    <Text style={Style.label}>Posts</Text>
                </View>

                <ScrollView>
                    {postedItemsCollection.map((item, id) => (
                        <PostItem key={id} item={item}/>
                    ))}
                </ScrollView>

            </View>
        </Modal>
    )
}

export default PostedItemsModal
