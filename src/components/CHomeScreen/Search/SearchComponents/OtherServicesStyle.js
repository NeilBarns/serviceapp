import { ScaledSheet } from 'react-native-size-matters';

const OtherServicesStyle = ScaledSheet.create ({
  
    otherServicesCard:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#e6ebe7',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingLeft: 10
    },

    serviceImageContainer:
    {
        backgroundColor: '#e6ebe7',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10, 
    }
})

export default OtherServicesStyle
