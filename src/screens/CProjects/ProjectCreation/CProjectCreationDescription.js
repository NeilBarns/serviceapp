import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Style from './CProjectCreationDescriptionStyle'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '../../../components/general/Icons'

const CProjectCreationDescription = () => {

    const navigation = useNavigation();

    return (
        <View style={Style.container}>
            <Text style={Style.labelStyle}>Well documented project can help{"\n"}the workers give well estimated quotes</Text>

            <View style={Style.mainContainer}
                        showsHorizontalScrollIndicator={false}>
                <TextInput style={Style.documentation}
                        placeholder='Tell us more about your project...'
                        multiline
                        numberOfLines={20}
                        textAlignVertical={'top'}/>
            </View>

            <View style={Style.continueTouchableOpacityContainer}>
                <TouchableOpacity style={Style.backTouchableOpacity}
                                  onPress={() => (navigation.navigate('CustomerProjectCreationWhenWhere'
                                  ))}
                                  >
                    <Ionicons name='chevron-back-sharp'
                              style={Style.backTouchableOpacityIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.continueTouchableOpacity}
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
