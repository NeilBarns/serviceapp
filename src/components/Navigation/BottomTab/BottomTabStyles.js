import { ScaledSheet } from 'react-native-size-matters';



const BottomTabStyles = ScaledSheet.create({

    container: 
    {
        padding: '7@s',
        // paddingTop: '50@s',
        // paddingBottom: '0@s',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    navigationTab:
    {
        alignItems: 'center'
    },

    navigationIcon:
    {
        fontSize: '20@s'
    },

    navigationText:
    {
        fontSize: '10@s',
        marginTop: '2@s'
    }
})

export default BottomTabStyles;