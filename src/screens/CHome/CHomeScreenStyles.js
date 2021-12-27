import { ScaledSheet } from 'react-native-size-matters';
import { screenHeight, screenWidth } from '../../constants/Dimensions';

const CHomeScreenStyles = ScaledSheet.create({
    container: 
    {
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    headerContainer:
    {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1
    },
    welcomeContainer:
    {
        // padding: '10@s'
    },
    welcomeSearchContainer:
    {
        width: '100%',
        height: '480@s'
    },
    searchContainer:
    {
        padding: '15@s',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
    },
    categoryLabel:
    {
        marginTop: '20@s',
        marginBottom: '0@s',
        paddingLeft: '15@s',
        fontWeight: '600',
        fontSize: '28@s',
    }
})

export default CHomeScreenStyles;
