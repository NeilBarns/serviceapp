import { ScaledSheet } from 'react-native-size-matters';

const CProjectCreationScreenStyle = ScaledSheet.create({

    container:
    {
        flex: 1,
        backgroundColor: 'white'
    },

    coverImage:
    {
        height: '190@s',
        width: '100%'
    },

    backTouchableOpacity:
    {
        padding: '5@s',
        width: null,
        borderRadius: '50@s',
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginTop: '40@s',
        marginLeft: '10@s'
    },

    backTouchableOpacityIcon:
    {
        fontSize: '18@s'
    },

    curvature:
    {
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: 'white',
        height: '10@s',
        width: '100%',
        borderRadius: '10@s',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        elevation: 5
    },

    detailsContainer:
    {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        paddingTop: 0,
    },


    titleLabel:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: '35@s',
        textAlign: 'center'
    },

    toastView: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    toastIcon: {
        color: 'red',
        fontSize: '22@s',
        marginRight: '10@s'
    },

    toastLabel:{
        fontWeight: 'bold'
    }

});

export default CProjectCreationScreenStyle;