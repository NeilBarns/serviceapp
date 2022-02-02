import { ScaledSheet } from 'react-native-size-matters';
import { screenWidth } from '../../../components/general/Dimensions';

const CProjectCreationImagesVideosStyle = ScaledSheet.create ({

    container:{
        flex:1,
        backgroundColor:'white'
    },

    labelStyle:
    {
        fontSize: '12@s',
        color: '#85807f',
        textAlign: 'center',
        paddingBottom: '15@s',
        lineHeight: '25@s'
    },

    mainContainer:{
        flex: 1
    },

    imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    
    addPostContainer:{
        paddingHorizontal: '10@s',
        marginBottom: '10@s'
    },

    

    postedItem:{
        width: screenWidth / 3,
        height: screenWidth / 3,
        justifyContent: 'center'
    },

    postedItemThumbnail:{
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    playButton:{
        fontSize: '45@s',
        elevation: 5,
        color: 'white',
        alignSelf: 'center'
    },

    imageAdderButton:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '50@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10@s',
        borderWidth: 2,
        elevation: 5
    },

    imageAdderIcon:{
        fontSize: '30@s',
        color: '#91c977'
    },

    continueTouchableOpacityContainer:
    {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: '10@s',
        width: '100%'
    },

    backTouchableOpacity:
    {
        backgroundColor: 'white',
        paddingHorizontal: '5@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',
    },

    backTouchableOpacityIcon:
    {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20@s'       
    },

    continueTouchableOpacity:
    {
        flex: 1,
        backgroundColor: '#eb6e65',
        padding: '15@s',
        borderRadius: '10@s',
        elevation: 5,
        marginLeft: '5@s'
    },

    continueTouchableOpacityLabel:
    {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14@s'       
    }

});

export default CProjectCreationImagesVideosStyle;