import { ScaledSheet } from 'react-native-size-matters';

const DefaultProjectCreationScreenStyle = ScaledSheet.create ({

    container:
    {
        backgroundColor: 'white',
        padding: '15@s',
        paddingTop: 0
    },

    descriptionLabel:
    {
        marginBottom: '10@s',
        lineHeight: '30@s',
        color: '#85807f'
    },

    serviceImages:
    {
        height: '150@s',
        width: '210@s',
        marginRight: '15@s'
    },

    badgesLabel:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: '28@s',
        marginTop: '30@s'                   
    },

    badgesDescriptionLabel:
    {
        fontSize: '14@s',
        lineHeight: '25@s',
        color: '#85807f'
    },

    badgesContainer:
    {
        marginTop: '30@s'
    },

    badgesView:
    {
        marginBottom: '18@s'
    },

    badgesCard:
    {
        flexDirection: 'row',
        elevation: 2,
        padding: '20@s',
        paddingBottom: '25@s',
        backgroundColor: '#679bd4',
        borderRadius: '15@s',
        marginRight: '15@s'
    },

    badgeTitle:
    {
        fontFamily: 'Nunito-Bold',
        fontSize: '20@s',
        color: 'white'       
    },

    badgeDescriptionLabel:
    {
        lineHeight: '20@s',
        marginTop: '10@s'
    },

    badgeIconContainer:
    {
        justifyContent: 'center'
    },

    badgeIcon:
    {
        height: '45@s',
        width: '45@s',
        marginLeft: '30@s'        
    },

    continueTouchableOpacityContainer:
    {
        backgroundColor: 'white',
        elevation: 5,
        padding: '10@s'
    },

    continueTouchableOpacity:
    {
        backgroundColor: '#eb6e65',
        padding: '15@s',
        borderRadius: '10@s',
        elevation: 5       
    },

    continueTouchableOpacityLabel:
    {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14@s'       
    }
});

export default DefaultProjectCreationScreenStyle;