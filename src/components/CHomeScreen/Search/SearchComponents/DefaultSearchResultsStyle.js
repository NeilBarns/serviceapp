import { ScaledSheet } from 'react-native-size-matters';

const DefaultSearchResultsStyle = ScaledSheet.create ({
  
    recentSearchesContainer: 
    {
        padding: 15,
        paddingTop:0 
    },
    
    recentSearchesLabel:
    {
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingBottom: 35,
        color: '#5c5e5c'
    },

    otherServicesContainer:
    {
        padding: 15,
        paddingTop:0  
    },

    otherServicesLabel:
    {
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingBottom: 35,
        color: '#5c5e5c'   
    }
})

export default DefaultSearchResultsStyle
