    import { ScaledSheet } from 'react-native-size-matters';

const PostedItemsModalStyle = ScaledSheet.create({
    
    container:{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },

    header:{
        padding: '15@s',
        paddingTop: '30@s',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2
    },

    label:{
        fontFamily: 'Poppins-Regular',
        fontSize: '20@s',
        alignItems: 'center',
        marginLeft: '0@s'
    },

    modalCloser:{
        flex: 0.2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    backButton:{
        padding: '10@s',
        // backgroundColor: '#eb6e65',
        borderRadius: '50@s'
    },

    backButtonIcon:{
        fontSize: '20@s',
        fontWeight: 'bold',
        color: '#000'
    },

    itemCard:{
        width: '100%',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: '#cacccf',
        backgroundColor: '#fff',
        elevation: 5,
        marginBottom: '20@s'
    },  

    cardControl:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '8@s',
        paddingTop: '15@s',
        paddingBottom: '15@s',
    }, 

    cardControlButton:{
        padding: '8@s',
        backgroundColor: '#fff',
        borderRadius: '50@s',
        elevation: 5,
        marginLeft: '8@s'
    },

    cardControlIcon:{
        fontSize: '15@s',
        color: '#000'
    },

    fileContainer:{
        backgroundColor: 'black',
        alignSelf: 'center',
        height: '500@s',
        width: '100%'
    },

    file:{
        height: '100%',
        width: '100%'
    },

    descriptionContainer:{
        padding: '15@s',
        paddingTop: '8@s',
        minHeight: '100@s',
        flexDirection: 'row'
    },

    descriptionLabel:{
        fontWeight: 'bold',
        marginRight: '5@s'
    }
});

export default PostedItemsModalStyle;
