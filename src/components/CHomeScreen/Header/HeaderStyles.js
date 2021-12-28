import { ScaledSheet } from 'react-native-size-matters';


const HeaderStyles = ScaledSheet.create({
    container: 
    {
        padding: '15@s',
        paddingBottom: '10@s',
        // paddingTop: '30@s',
        // height: '90@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    /* LEFT SIDE OF THE HEADER */
    locationContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    locationText:
    {
        flexDirection: 'column',
        paddingLeft: '6@s'
    },
    locationTextLabel:
    {
        fontSize: '11@s',
        paddingBottom: '2@s'
    },
    geoTextContainer:
    {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    geoText:
    {
       fontWeight: 'bold',
       marginRight: '5@s'
    },
    locationSharpIcon:
    {
        fontSize: '24@s', 
        // color: '#F3C551'
        color: '#eb6e65'
    },
    triangleDownIcon:
    {
        fontSize: '12@s', 
        color: '#000000'
    },

    /* RIGHT SIDE OF THE HEADER */
    roundedButton:
    {
        backgroundColor: '#ffffff',
        borderRadius: '100@s',
        // elevation: 1,
        padding: '8@s'
    },
    
    notificationContainer:
    {
        justifyContent: 'center'
    },
    notificationsOutlineIcon:
    {
        fontSize: '22@s', 
        color: '#000000'
    },
})

export default HeaderStyles;
