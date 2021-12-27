import { ScaledSheet } from 'react-native-size-matters';

const PopularServicesStyles = ScaledSheet.create({

    container: 
    {
        padding: '13@s',
        paddingBottom: 0,
        paddingTop: '25@s',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '250@s',
    },

    popServiceCard:
    {
        height: '100%',
        marginBottom: '55@s',
        borderRadius: '5@s',
        marginRight: '15@s'
    },

    popServiceImage:
    {
        height: '140@s',
        width: '200@s',
        borderRadius: '10@s',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    popServiceTitle:
    {
        marginTop: '5@s',
        fontSize: '18@s',
        fontWeight: '700',
        color: 'white'
    },

    popServiceNumber:
    {
        marginTop: '5@s',
        fontSize: '13@s',
        color: 'white'
    },

    popDetails:
    {
        flex: 1,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 10,
        paddingLeft: 15,
    }
})

export default PopularServicesStyles;