import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import CategoriesStyle from './CategoriesStyle'

const tempCategory = [
    {
        id: 0,
        title: 'Handy Man',
        imageUrl: require('../../../assets/handyman.jpg')
    },
    {
        id: 1,
        title: 'Cleaning',
        imageUrl: require('../../../assets/cleaning.jpg')
    },
    {
        id: 2,
        title: 'Moving',
        imageUrl: require('../../../assets/movers.jpg')
    },
    {
        id: 3,
        title: 'Mounting',
        imageUrl: require('../../../assets/mounting.jpg')
    },
    {
        id: 4,
        title: 'Yardwork',
        imageUrl: require('../../../assets/yardwork.jpg')
    },
    {
        id: 5,
        title: 'Electrical works',
        imageUrl: require('../../../assets/electrical.jpg')
    },
]

const Categories = () => {
    return (
        <View style={CategoriesStyle.container}>
            {tempCategory.map((category, id) => (
                <CategoryCard key={id} imageUrl={category.imageUrl} title={category.title}/>
            ))}
        </View>
    )
}

const CategoryCard = (props) => {
    return <TouchableOpacity activeOpacity={1} style={CategoriesStyle.categoryCard}>
        <Image  style={CategoriesStyle.categoryImage}
                source={props.imageUrl}
                resizeMode='cover'    
        />
        <Text style={CategoriesStyle.categoryTitle}>{props.title}</Text>
    </TouchableOpacity>
}

export default Categories
