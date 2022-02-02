import React, { useState, useContext } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Style from './CProjectCreationDescriptionStyle'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '../../../components/general/Icons'
import useTaskDetailsContext from '../../../hooks/Customer/useTaskDetailsContext';
import useTaskDetailChangesMadeContext from '../../../hooks/Customer/useTaskDetailChangesMadeContext';

const CProjectCreationDescription = () => {

    const navigation = useNavigation();
    const [descriptionText, setDescriptionText] = useState();
    const [disabledNextButton, setDisabledNextButton] = useState(true);
    const [nextButtonColor, setNextButtonColor] = useState('#e1e3e6');

    const { actions } = useContext(useTaskDetailsContext);
    const { actions_changes } = useContext(useTaskDetailChangesMadeContext);


    const descriptionChange = (text) => {
        let value = text;
        setDescriptionText(value);
        actions({ type: 'setTaskDescriptionGlobal', payload: { value } });
        actions_changes({ type: 'changesMade' });

        if(value.length >= 20)
        {
            setDisabledNextButton(false);
            setNextButtonColor('#eb6e65');
        }
        else{
            setDisabledNextButton(true);
            setNextButtonColor('#e1e3e6');
        }
    }

    return (
        <View style={Style.container}>
            <Text style={Style.labelStyle}>Well documented project can help{"\n"}the workers give well estimated quotes</Text>

            <View style={Style.mainContainer}
                        showsHorizontalScrollIndicator={false}>
                <TextInput style={Style.documentation}
                        value={descriptionText}
                        placeholder='Tell us more about your project (required)...'
                        multiline
                        numberOfLines={20}
                        textAlignVertical={'top'}
                        onChangeText={(text) => {
                            descriptionChange(text);
                        }}/>
            </View>

            <View style={Style.continueTouchableOpacityContainer}>
                <TouchableOpacity style={Style.backTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationWhenWhere'
                                  ))}
                                  >
                    <Ionicons name='chevron-back-sharp'
                              style={Style.backTouchableOpacityIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={[Style.continueTouchableOpacity, {backgroundColor: nextButtonColor}]}
                                  disabled={disabledNextButton}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationImagesVideos'
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

export default CProjectCreationDescription
