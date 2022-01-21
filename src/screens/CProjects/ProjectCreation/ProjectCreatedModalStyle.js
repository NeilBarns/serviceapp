import { ScaledSheet } from 'react-native-size-matters';

const ProjectCreatedModalStyle = ScaledSheet.create({
    
    container:{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },

    header:{
        padding: '15@s',
        paddingTop: '40@s',
        paddingBottom: '7@s',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        borderBottomColor: 'black',
        borderBottomWidth: '2@s'
        // marginBottom: '10@s'
    },

    label:{
        fontFamily: 'Poppins-Regular',
        fontSize: '16@s',
        alignItems: 'center',
        marginLeft: '0@s'
    },

    backButton:{
        padding: '10@s',
        // backgroundColor: '#eb6e65',
        borderRadius: '50@s'
    },

    backButtonIcon:{
        fontSize: '16@s',
        fontWeight: 'bold',
        color: '#000'
    },

    mainDetails:{
        padding: '15@s',
        paddingBottom: '25@s',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2
    },

    serviceName:{
        fontFamily: 'Nunito-Bold',
        fontSize: '25@s',
        marginBottom: '20@s'
    },

    detailsIcon:{
        fontSize: '18@s'
    },

    detailsContainer:{
        flexDirection: 'row',
        width: '100%',
        paddingBottom: '5@s',
        paddingTop: '10@s'
    },

    detailsLeft:{
        flexDirection: 'row',
        flex: 0.7
    },

    detailsRight:{
        flex: 0.3,
        alignItems: 'flex-end',
    },

    editLabel:{
        color: 'blue',
        textDecorationLine: 'underline',
    },

    otherDetails:{
        flex: 1,
        backgroundColor: 'red'
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

    // mainCard:{
    //     padding: '15@s',
    //     backgroundColor: 'white',
    //     width: '80%',
    //     elevation: 5,
    //     borderRadius: '15@s'
    // },

    // label:{
    //     fontSize: '15@s',
    //     textAlign: 'center'
    // },

    // buttonsContainer:{
    //     flexDirection: 'row'
    // },

    // buttons:{
    //     flex: 1,
    //     paddingTop: '20@s',
    //     paddingBottom: '2@s',
    //     paddingLeft: 0,
    //     paddingRight: 0,
    //     alignItems: 'center'        
    // },

    // buttonLabel:{
    //     color: 'blue',
    //     textDecorationLine: 'underline'       
    // }
});

export default ProjectCreatedModalStyle;
