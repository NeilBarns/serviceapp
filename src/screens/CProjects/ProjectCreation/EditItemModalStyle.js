import { ScaledSheet } from 'react-native-size-matters';

const EditItemModalStyle = ScaledSheet.create({
    
    container:{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },

    header:{
        padding: '15@s',
        paddingTop: '40@s',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        marginBottom: '10@s'
    },

    cancelButtonContainer:{
        flex: 1,
        justifyContent: 'center',
    },

    saveButtonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    mainContainer:{
        flex: 1
    },

    fileContainer:{
        backgroundColor: 'black',
        alignSelf: 'center',
        height: '400@s',
        width: '100%',
        marginBottom: '10@s'
    },

    descriptionContainer:{
        paddingHorizontal: '5@s'
    },

    documentation:{
        borderColor: 'black',
        // padding: '15@s',
        borderColor: '#7f827e',
        borderBottomWidth: '2@s',
        borderRadius: '5@s',
        marginTop: '10@s',
        marginBottom: '20@s',
        fontSize: '18@s'
    },
});

export default EditItemModalStyle;
