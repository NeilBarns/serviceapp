import { ScaledSheet } from 'react-native-size-matters';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const SearchStyles = ScaledSheet.create({

    container: 
    {
        padding: '15@s',
        // paddingBottom: '10@s',
        // paddingTop: '20@s',
        // height: '700@s',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '50@s'
    },

    // welcomeText:
    // {
    //     fontSize: '45@s',
    //     // fontWeight: 'bold',
    //     color: '#2e302f'
    // }

    searchIcon:
    {
        fontSize: '18@s',
        color: '#2e302f'
    },

    searchText:
    {
        marginLeft: '8@s'
    }

})

export default SearchStyles;