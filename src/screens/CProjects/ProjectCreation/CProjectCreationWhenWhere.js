import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Style from './CProjectCreationWhenWhereStyle'
import {Calendar} from 'react-native-calendars';
import {EvilIcons, Ionicons} from '../../../components/general/Icons'
import {getCurrentDate, initialTime} from '../../../components/general/DateTime'
import TimePickerModal from './TimePickerModal';
import { useNavigation } from '@react-navigation/native';


const CProjectCreationWhenWhere = ({route}) => {
    
    const navigation = useNavigation();

    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(false);


    const calendarDateSelection = (day) => {
        
        const dateString = day.dateString;
        setSelectedDate(dateString);
        setModalData(dateString);
    }

    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    const [timeLabel, setTimeLabel] = useState(initialTime);

    return (
        <View style={Style.container}>

            <TimePickerModal visible={modalShow}
                             setModalShow={setModalShow}
                             date={modalData}
                             setTimeLabel={setTimeLabel}/>

            <Text style={Style.labelStyle}>Setup your task's schedule and location</Text>

            <ScrollView style={Style.mainContainer}
            showsVerticalScrollIndicator={false}>

                <Calendar
                    style={Style.calendar}
                    current={getCurrentDate()}
                    minDate={getCurrentDate()}
                    enableSwipeMonths
                    markedDates={{
                        [selectedDate]: {selected: true, marked: false, selectedColor: '#eb6e65'}
                    }}
                    onDayPress={day => {
                        calendarDateSelection(day);
                    }}
                />

                <View style={Style.timeDetailsContainer}>
                    <View style={Style.timeDetailIconLabel}>
                        <EvilIcons name='clock' style={Style.timeDetailsIcon}/>
                        <Text style={Style.timeDetailsLabel}>
                            {timeLabel}
                        </Text>
                    </View>
                    <View style={Style.timeChangerContainer}>
                        <Text style={Style.timeChangerLabel}
                        onPress={() => (setModalShow(true))}
                        >Change time</Text>
                    </View>
                </View>

                <View style={Style.locationDetailsContainer}>
                    <View style={Style.locationDetailIconLabel}>
                        <EvilIcons name='location' style={Style.locationDetailsIcon}/>
                        <Text style={Style.locationDetailsLabel}
                        numberOfLines={1} 
                        ellipsizeMode='tail'>
                            Master Bubble Laundry Shop
                        </Text>
                    </View>
                    <View style={Style.locationChangerContainer}>
                        <Text style={Style.locationChangerLabel}
                        onPress={() => (setModalShow(true))}
                        >Change location</Text>
                    </View>
                </View>

            </ScrollView>
            
            <View style={Style.continueTouchableOpacityContainer}>
                <TouchableOpacity style={Style.backTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerDefaultProjectCreationScreen'
                                  ))}
                                  >
                    <Ionicons name='chevron-back-sharp'
                              style={Style.backTouchableOpacityIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.continueTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationDescription'
                                //   , {
                                //       modalShow: setModalShow,
                                //       modalData: setModalData
                                //   }
                                  ))}
                                  >
                    <Text style={Style.continueTouchableOpacityLabel}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CProjectCreationWhenWhere
