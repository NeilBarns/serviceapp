import { ScaledSheet } from 'react-native-size-matters';
import { screenHeight, screenWidth } from '../../constants/Dimensions';

const CHomeScreenStyles = ScaledSheet.create({
    container: 
    {
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        backgroundColor: '#FAFAFA'
    },


})

export default CHomeScreenStyles;
