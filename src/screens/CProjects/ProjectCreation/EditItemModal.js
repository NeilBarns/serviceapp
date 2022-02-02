import React, { useEffect, useState, useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Modal,
    TextInput,
    ScrollView
} from 'react-native'
import Style from './EditItemModalStyle'
import { Video } from 'expo-av';
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';

const EditItemModal = ({ visible,
    setEditModalShow,
    selectedItem,
    postedItemsCollection }) => {


    const [selectedItemDescription, setSelectedItemDescription] = useState(selectedItem.description);

    const { actions } = useContext(useTaskDetailsContext);
    const { actions_changes } = useContext(useTaskDetailChangesMadeContext);

    const modalCloser = () => {
        setEditModalShow(false);
    }

    const updateDescription = () => {
        let selectedItem_id = selectedItem.id;
        let obj = postedItemsCollection.findIndex(item => item.id === selectedItem_id);

        postedItemsCollection[obj].description = selectedItemDescription;

        let value = postedItemsCollection;

        actions({ type: 'setTaskMediaGlobal', payload: { value } });
        actions_changes({ type: 'changesMade' });

        modalCloser();
    }


    useEffect(() => {
        setSelectedItemDescription(selectedItem.description);
    }, [visible])


    const changeText = (text) => {
        setSelectedItemDescription(text);
    }

    const PostItem = () => {

        let thumbNail = <View></View>;

        if (selectedItem.entity !== undefined) {
            if (selectedItem.type === 'video') {
                thumbNail = <VideoItem />
            }
            else {
                thumbNail = <ImageItem />
            }
        }

        return (thumbNail)
    }

    const VideoItem = () => {
        return (<Video
            style={Style.fileContainer}
            source={{ uri: selectedItem.entity }}
            useNativeControls
            resizeMode="contain"
            isLooping
        />)
    }

    const ImageItem = () => {
        return (<ImageBackground style={Style.fileContainer}
            source={{ uri: selectedItem.entity }}
            resizeMode='contain'>
        </ImageBackground>);
    }

    return (
        <Modal visible={visible}
            transparent={true}
            animationType={'slide'}
            statusBarTranslucent={true}>

            <View style={Style.container}>
                <View style={Style.header}>
                    <View style={Style.cancelButtonContainer}>
                        <TouchableOpacity onPress={() => modalCloser()}>
                            <Text style={{
                                color: 'red'
                            }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.saveButtonContainer}>
                        <TouchableOpacity onPress={() => updateDescription()}>
                            <Text style={{
                                color: 'green'
                            }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={Style.mainContainer}>
                    <View style={Style.descriptionContainer}>
                        <TextInput style={Style.documentation}
                            multiline
                            numberOfLines={4}
                            textAlignVertical={'top'}
                            value={selectedItemDescription}
                            onChangeText={(text) => changeText(text)} />
                    </View>
                    <PostItem />
                </ScrollView>

            </View>
        </Modal>
    )
}

export default EditItemModal
