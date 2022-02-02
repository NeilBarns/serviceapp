import React, { useState, useContext } from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
import WheelPicker from 'react-native-wheely';
import moment from 'moment';
import { getCurrentDate, initialTime } from '../../../components/general/DateTime'
import Style from './TimePickerModalStyle'
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';

const TimePickerModal = ({ visible, setModalShow, date, setTimeLabel }) => {

    const { actions } = useContext(useTaskDetailsContext);
    const { actions_changes } = useContext(useTaskDetailChangesMadeContext);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [timeSlotItems, setTimeSlotItems] = useState([]);

    let timeSlots = [];
    const createTimeSlots = (start, end) => {
        let startTime = moment(start, 'HH:mm');
        let endTime = moment(end, 'HH:mm');

        let array = [];
        while (startTime <= endTime) {
            array.push(new moment(startTime).format('hh:mm A'));
            startTime.add(1, 'hours');
        }
        return array;
    }

    const modalCloser = (selectedIndex) => {
        if (selectedIndex !== null) {
            let value = timeSlotItems[selectedIndex];

            setTimeLabel(value);
            actions({ type: 'setTaskTimeGlobal', payload: { value } });
            actions_changes({ type: 'changesMade' });
        }
        setModalShow(false);
    }

    const timeListCreator = () => {

        if (date === false) {
            date = getCurrentDate();
        }

        if (getCurrentDate().toString() == date.toString()) {
            timeSlots = createTimeSlots(initialTime(), '23:30');
        }
        else {
            timeSlots = createTimeSlots('00:00', '23:30');
        }

        setTimeSlotItems(timeSlots);

    }


    return (
        <Modal visible={visible}
            transparent={true}
            animationType={'fade'}
            statusBarTranslucent={true}
            onShow={() => timeListCreator()}>

            <View style={Style.container}>
                <View style={Style.mainCard}>
                    <Text style={Style.label}>Choose time of task</Text>
                    <WheelPicker
                        selectedIndex={selectedIndex}
                        options={timeSlotItems}
                        onChange={(index) => setSelectedIndex(index)}
                    />
                    <View style={Style.buttonsContainer}>
                        <Pressable style={Style.buttons}
                            onPress={() => modalCloser(selectedIndex)}
                        >
                            <Text style={Style.buttonLabel}>
                                Confirm
                            </Text>
                        </Pressable>
                        <Pressable style={Style.buttons}
                            onPress={() => modalCloser(null)}
                        >
                            <Text style={[Style.buttonLabel, { color: 'red' }]}>
                                Cancel
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TimePickerModal
