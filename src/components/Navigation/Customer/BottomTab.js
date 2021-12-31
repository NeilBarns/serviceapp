import React from 'react'
import { View, Text,  TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BottomTabStyles from './BottomTabStyles';
import CHomeScreen from '../../../screens/CHome/CHomeScreen';
import CProjectsScreen from '../../../screens/CProjects/CProjectsScreen';

const BottomTab = () => {

    //const navigation = useNavigation();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <View style={BottomTabStyles.container}>
            <TouchableOpacity style={BottomTabStyles.navigationTab}>
                <SimpleLineIcons name="home" style={[BottomTabStyles.navigationIcon, {color: '#eb6e65'}]}/>
                <Text style={BottomTabStyles.navigationText}>Home</Text>
            </TouchableOpacity>
            {/* onPress={() => (navigation.navigate('CProject'))} */}
            <TouchableOpacity style={BottomTabStyles.navigationTab}>
                <SimpleLineIcons name="drawer" style={BottomTabStyles.navigationIcon}/>
                <Text style={BottomTabStyles.navigationText}>Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={BottomTabStyles.navigationTab}>
                <SimpleLineIcons name="envelope" style={BottomTabStyles.navigationIcon}/>
                <Text style={BottomTabStyles.navigationText}>Inbox</Text>
            </TouchableOpacity>

            <TouchableOpacity style={BottomTabStyles.navigationTab}>
                <SimpleLineIcons name="user" style={BottomTabStyles.navigationIcon}/>
                <Text style={BottomTabStyles.navigationText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTab
