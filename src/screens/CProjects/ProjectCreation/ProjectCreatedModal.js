import React from 'react'
import { View, 
         Text, 
         Modal, 
         TouchableOpacity,
         ScrollView} from 'react-native'
import {EvilIcons, Feather} from '../../../components/general/Icons'
import Style from './ProjectCreatedModalStyle'

const ProjectCreatedModal = ({visible,
                              setProjectCreatedModalShow}) => {

    const modalCloser = () => {
        setProjectCreatedModalShow(false);
    }

    return (
        <Modal  visible={visible}
                transparent={false}
                animationType={'slide'}
                statusBarTranslucent={true}>
            <View style={Style.container}>
                <View style={Style.header}>
                    <TouchableOpacity style={Style.backButton}
                                      onPress={() => modalCloser()}>
                        <Feather style={Style.backButtonIcon}
                                    name='arrow-left'/>
                    </TouchableOpacity>
                    <Text style={Style.label}>Finalize project</Text>
                </View>
                <View style={Style.mainDetails}>
                    <Text style={Style.serviceName}>Mounting</Text>

                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='location' style={Style.detailsIcon}/>
                            <Text>Master Bubble Laundry Shop</Text>
                        </View>
                        <View style={Style.detailsRight}>
                            <Text style={Style.editLabel}>Edit location</Text>
                        </View>
                    </View>

                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='calendar' style={Style.detailsIcon}/>
                            <Text>June 18, 2022</Text>
                        </View>
                        <View style={Style.detailsRight}>
                            <Text style={Style.editLabel}>Edit date</Text>
                        </View>
                    </View>

                    <View style={Style.detailsContainer}>
                        <View style={Style.detailsLeft}>
                            <EvilIcons name='clock' style={Style.detailsIcon}/>
                            <Text>08:00 AM</Text>
                        </View>
                        <View style={Style.detailsRight}>
                            <Text style={Style.editLabel}>Edit time</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={Style.otherDetails}>
                    <View>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default ProjectCreatedModal
