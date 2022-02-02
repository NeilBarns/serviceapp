import { ScaledSheet } from 'react-native-size-matters';
import { screenWidth } from '../../../components/general/Dimensions';

const CProjectFinalizeProjectStyle = ScaledSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    labelStyle:
    {
        fontSize: '12@s',
        color: '#85807f',
        textAlign: 'center',
        paddingBottom: '15@s',
        lineHeight: '25@s'
    },

    mainDetails: {
        padding: '15@s',
        paddingBottom: '15@s',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2
    },

    detailsIcon: {
        fontSize: '18@s'
    },

    detailsContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: '5@s',
        paddingTop: '10@s'
    },

    detailsLeft: {
        flexDirection: 'row',
        flex: 0.7
    },

    detailsRight: {
        flex: 0.3,
        alignItems: 'flex-end',
    },

    editLabel: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: '11@s'
    },

    documentation: {
        borderColor: 'black',
        padding: '8@s',
        borderColor: '#e6e4e1',
        borderWidth: '1@s',
        borderRadius: '5@s',
        marginTop: '15@s',
        marginHorizontal: '15@s',
        marginBottom: '20@s',
    },

    docuText: {
        lineHeight: '20@s',
        marginBottom: '15@s'
    },

    mainContainer: {
        flex: 1
    },

    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        height: '100%'
    },

    postedItem: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        justifyContent: 'center'
    },

    postedItemThumbnail: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    playButton: {
        fontSize: '45@s',
        elevation: 5,
        color: 'white',
        alignSelf: 'center'
    },

    continueTouchableOpacityContainer:
    {
        flexDirection: 'column',
        backgroundColor: 'white',
        elevation: 5,
        padding: '10@s',
        width: '100%'
    },

    termsAndPrivacyContainer: {
        flexDirection: 'row',
        lineHeight: '20@s',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    termsAndPrivacyLabel: {
        fontSize: '11@s',
    },

    termsAndPrivacyLabelHighlight: {
        fontSize: '11@s',
        color: 'blue'
    },

    mainContinueButtonContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        // elevation: 5,
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

export default CProjectFinalizeProjectStyle;