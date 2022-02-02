import { ScaledSheet } from 'react-native-size-matters';

const CProjectCreationDescriptionStyle = ScaledSheet.create ({

    container:{
        flex:1,
        backgroundColor:'white'
    },

    labelStyle:
    {
        fontSize: '14@s',
        color: '#85807f',
        textAlign: 'center',
        paddingBottom: '15@s',
        lineHeight: '25@s'
    },

    mainContainer:{
        paddingHorizontal: '15@s',
        marginBottom: '20@s'
    },
    
    documentation:{
        borderWidth: 1,
        borderColor: 'black',
        padding: '15@s',
        borderColor: '#e6e5e3',
        borderWidth: '3@s',
        borderRadius: '10@s'
    },

    imageandvideoSeperator:{
        flexDirection: 'row'
    },

    separator:
    {
        flex: 1,
        // padding: '15@s',
        paddingTop: '15@s',
        paddingBottom: '15@s',
        alignItems: 'center'
    },

    separatorLabel:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '5@s'
    },

    division:
    {
        borderWidth: '1@s',
        borderColor: '#e6e5e3',
        width: '100%'
    },

    imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    imageAdderButton:{
        backgroundColor: '#e6e5e3',
        height: '80@s',
        width: '80@s',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageAdderIcon:{
        fontSize: '50@s',
        color: '#b0afac'
    },

    continueTouchableOpacityContainer:
    {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
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

export default CProjectCreationDescriptionStyle;