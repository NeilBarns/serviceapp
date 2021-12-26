import { ScaledSheet } from 'react-native-size-matters';



const WelcomeStyles = ScaledSheet.create({

    container: 
    {
        padding: '20@s',
        paddingBottom: '10@s',
        paddingTop: '0@s',
        height: '100@s',
        flexDirection: 'column',
    },

    welcomeText:
    {
        fontSize: '30@s',
        fontWeight: 'bold'
    }

})

export default WelcomeStyles;