import { ScaledSheet } from 'react-native-size-matters';

const ImageVideoPostModalStyle = ScaledSheet.create({
    
    container:{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },

    header:{
        padding: '15@s',
        paddingTop: '30@s',
        paddingBottom: 0,
        flexDirection: 'row'
    },

    label:{
        flex: 0.8,
        fontFamily: 'Poppins-Regular',
        fontSize: '40@s',
        // textAlign: 'center'
    },

    modalCloser:{
        flex: 0.2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    postButton:{
        padding: '10@s',
        backgroundColor: '#eb6e65',
        borderRadius: '50@s'
    },

    postButtonIcon:{
        fontSize: '20@s',
        fontWeight: 'bold',
        color: '#fff'
    },

    mainCard:{
        padding: '15@s',
        flex: 1
    },

    documentation:{
        borderColor: 'black',
        // padding: '15@s',
        borderColor: '#7f827e',
        borderWidth: '0@s',
        borderRadius: '5@s',
        marginTop: '10@s',
        marginBottom: '20@s',
        fontSize: '18@s'
    },

    buttonsContainer:{
        flexDirection: 'row'
    },

    image:{
        alignSelf: 'center',
        flex: .8,
        width: '100%'
    },

    video:{
        alignSelf: 'center',
        flex: .8,
        width: '100%'
    },

    resetButton:{
        backgroundColor: 'white',
        position: 'absolute',
        right: '10@s',
        top: '10@s',
        padding: '5@s',
        borderRadius: '50@s',
        elevation: 5,
        zIndex: 10
    },

    resetButtonIcon:{
        fontSize: '18@s'
    },

    continueTouchableOpacityContainer:
    {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        elevation: 5,
        padding: '10@s',
        width: '100%'
    },

    continueTouchableOpacity:
    {
        // backgroundColor: '#eb6e65',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'black',
        padding: '15@s',
        borderRadius: '10@s'     
    },

    continueTouchableOpacityLabel:
    {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14@s'       
    }
});

export default ImageVideoPostModalStyle;
