import React, { useState, useContext } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import Style from './DeleteItemModalStyle'
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';

const DeleteItemModal = ({ visible,
    setDeleteModalShow,
    selectedItem,
    postedItemsCollection,
    setPostedItemModalShow }) => {

    const [entityTypeLabel, setEntityTypeLabel] = useState(selectedItem.type);
    let temp_postedItemsCollection = [];

    const { actions } = useContext(useTaskDetailsContext);
    const { actions_changes } = useContext(useTaskDetailChangesMadeContext);

    const modalCloser = () => {
        setDeleteModalShow(false);
    }

    const deletePostedItem = () => {
        let selectedItem_id = selectedItem.id;
        temp_postedItemsCollection = postedItemsCollection;
        let obj = postedItemsCollection.findIndex(item => item.id === selectedItem_id);

        postedItemsCollection.splice(obj, 1);
        let value = postedItemsCollection;
        actions({ type: 'setTaskMediaGlobal', payload: { value } });
        actions_changes({ type: 'changesMade' });

        modalCloser();

        if (postedItemsCollection.length === 1) {
            setPostedItemModalShow(false);
        }
    }

    const filePreparation = () => {
        if (selectedItem.type === 'video') {
            setEntityTypeLabel('video');
        }
        else {
            setEntityTypeLabel('photo');
        }
    }

    return (
        <Modal visible={visible}
            transparent={true}
            animationType={'none'}
            statusBarTranslucent={true}
            onShow={() => filePreparation()}>

            <View style={Style.container}>
                <View style={Style.mainCard}>
                    <Text style={Style.label}>{`Sure to delete the ${entityTypeLabel}?`}</Text>
                    <View style={Style.buttonsContainer}>
                        <TouchableOpacity style={Style.buttons}
                            onPress={() => deletePostedItem()}>
                            <Text style={Style.buttonLabel}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.buttons}
                            onPress={() => modalCloser()}>
                            <Text style={[Style.buttonLabel, { color: 'red' }]}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteItemModal
