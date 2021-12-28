import { ScaledSheet } from 'react-native-size-matters';



const WelcomeStyles = ScaledSheet.create({

    container: 
    {
        padding: '20@s',
        width: '100%',
        paddingBottom: '0@s',
        paddingTop: '30@s',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    welcomeText:
    {
        // fontSize: '35@s',
        fontSize: '22@s',
        letterSpacing: '1@s',
        lineHeight: '30@s',
        fontWeight: '500',
        // fontWeight: 'bold',
        // color: '#FFFFFF',
        color: 'black'
    }

})

export default WelcomeStyles;