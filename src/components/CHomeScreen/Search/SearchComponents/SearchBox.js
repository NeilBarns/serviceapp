import React, {useState, useEffect, useRef} from 'react'
import { View, Text, Pressable, TextInput, Keyboard } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBoxStyle from './SearchBoxStyle'
import { useNavigation, useIsFocused } from '@react-navigation/native';



const SearchBox = ({refRBSheet}) => {

    const tempServiceList = [
        {
            id: 0,
            title: 'Handy Man',
            imageUrl: require('../../../../assets/handyman.jpg')
        },
        {
            id: 1,
            title: 'Cleaning',
            imageUrl: require('../../../../assets/cleaning.jpg')
        },
        {
            id: 2,
            title: 'Moving',
            imageUrl: require('../../../../assets/movers.jpg')
        },
        {
            id: 3,
            title: 'Mounting',
            imageUrl: require('../../../../assets/mounting.jpg')
        },
        {
            id: 4,
            title: 'Yardwork',
            imageUrl: require('../../../../assets/yardwork.jpg')
        },
        {
            id: 5,
            title: 'Electrical works',
            imageUrl: require('../../../../assets/electrical.jpg')
        },
    ];

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const searchInput = useRef();

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [clearButtonDisplay, setClearButtonDisplay] = useState('none');


    useEffect(() => {
        searchInput.current.focus();
    }, [])

    useEffect(() => {
        if(filteredData.length > 0)
        {
            if(isFocused)
            {
                navigation.navigate('FilteredResults', {data: filteredData});
            }
            else
            {
                navigation.setParams({data: filteredData});
            }
        }
    }, [filteredData])
    
    const searchFilter = (text) => {
        
        if(text.length > 0)
        {
            const newData = tempServiceList.filter(element => element.title.toLowerCase().includes(text.toLowerCase()));
            setClearButtonDisplay('flex');

            if(newData.length > 0)
            {
                setFilteredData(newData);
            }
            else{
                const newData = [{}];
                setFilteredData(newData);
            }
        }
        else
        {
            searchDefaulter();
        }
    };

    function searchDefaulter()
    {
        navigation.navigate('DefaultSearchResults');
        setClearButtonDisplay('none');
    }

    return (
        <>
            <Pressable style={SearchBoxStyle.pressableBackContainer}
                    onPress={() => (refRBSheet.current.close())}>
                        <Feather name="arrow-left-circle" style={SearchBoxStyle.arrowLeftCircleIcon}/>
            </Pressable>
            <View style={SearchBoxStyle.searchBoxContainer}>
                <TextInput ref={searchInput}
                           style={SearchBoxStyle.textInput} 
                           placeholder='Search something like "Leak" or "Plumber"'
                           keyboardShouldPersistTaps='always'
                           onChangeText={(text) => searchFilter(text)}

                />
            </View>
            <Pressable style={[SearchBoxStyle.clearButtonContainer, {display: clearButtonDisplay}]} 
                        onPress={() => {
                            searchInput.current.clear();
                            searchInput.current.focus();
                            searchDefaulter();
                        }}>
                <Ionicons name='close-circle' style={SearchBoxStyle.clearButtonIcon}/>
            </Pressable>
        </>
    )
}

export default SearchBox
