import { ScaledSheet } from 'react-native-size-matters';

const RecentSearchesStyle = ScaledSheet.create ({
  
    recentSearchesCard: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#e6ebe7',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingLeft: 10
    },
    
    recentSearchesIconContainer:
    {
        backgroundColor: '#e6ebe7',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
    },

    recentSearchesIcon:
    {
        fontSize: 25,
        color: '#8c8f8d'   
    }
})

export default RecentSearchesStyle
