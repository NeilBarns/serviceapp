import { ScaledSheet } from 'react-native-size-matters';

const DeleteItemModalStyle = ScaledSheet.create({
    
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        width: '100%',
        padding: '15@s'
    },

    mainCard:{
        padding: '15@s',
        backgroundColor: 'white',
        width: '80%',
        elevation: 5,
        borderRadius: '15@s'
    },

    label:{
        fontSize: '15@s',
        textAlign: 'center'
    },

    buttonsContainer:{
        flexDirection: 'row'
    },

    buttons:{
        flex: 1,
        paddingTop: '20@s',
        paddingBottom: '2@s',
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center'        
    },

    buttonLabel:{
        color: 'blue',
        textDecorationLine: 'underline'       
    }
});

export default DeleteItemModalStyle;
