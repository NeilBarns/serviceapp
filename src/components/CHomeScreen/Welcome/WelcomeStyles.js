import { ScaledSheet } from 'react-native-size-matters';



const WelcomeStyles = ScaledSheet.create({

    container: 
    {
        padding: '20@s',
        paddingBottom: '10@s',
        paddingTop: '20@s',
        // height: '700@s',
        flexDirection: 'column',
    },

    welcomeText:
    {
        fontSize: '30@s',
        fontWeight: '500',
        // letterSpacing: 1,
        // color: '#2e302f'
        color: '#FFFFFF',
    }

})

export default WelcomeStyles;