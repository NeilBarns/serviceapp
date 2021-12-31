import { ScaledSheet } from 'react-native-size-matters';

const SearchBoxStyle = ScaledSheet.create({

    pressableBackContainer:{
        justifyContent: 'center'
    },

    arrowLeftCircleIcon:
    {
        fontSize: '22@s'
    },

    searchBoxContainer:
    {
        justifyContent: 'center',
        paddingLeft: '18@s'
    },

    textInput:
    {
        fontSize: '13@s',
    },

    clearButtonContainer:
    {
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        flex: 1, 
        paddingRight: 15
    },

    clearButtonIcon:
    {
        fontSize: 18,
        color: '#c1c4c9'
    }
})

export default SearchBoxStyle;
