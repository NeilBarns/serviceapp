import { ScaledSheet } from 'react-native-size-matters';



const CategoriesStyle = ScaledSheet.create({

    container: 
    {
        padding: '13@s',
        paddingTop: '25@s',
        paddingBottom: '0@s',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    categoryCard:
    {
        height: '100@s',
        marginBottom: '55@s'
    },

    categoryImage:
    {
        height: '100@s',
        width: '150@s',
        borderRadius: '5@s'
    },

    categoryTitle:
    {
        marginTop: '5@s',
        fontSize: '13@s',
        fontWeight: 'bold'
    }

})

export default CategoriesStyle;