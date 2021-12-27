import React from 'react'
import { View, Text, Image } from 'react-native'
import ProjectsTodayStyle from './ProjectsTodayStyle'

const tempProjectToday = [
    {
        id: 0,
        workerProfileImage: require('../../../assets/plumber.jpg'),
        workerName: 'Restituto Cruz',
        service: 'Plumbing',
        time: '08:00 AM',
        currency: '$',
        rate: 75
    },
    {
        id: 1,
        workerProfileImage: require('../../../assets/electrician.jpg'),
        workerName: 'Timothy Dykes',
        service: 'Electrical works',
        time: '10:00 AM',
        currency: '$',
        rate: 80
    }
]


const ProjectsToday = () => {
    return (
        <View style={ProjectsTodayStyle.container}>
            {tempProjectToday.map((project, id) => (
                <ProjectsTodayCard key={id}
                                workerProfileImage = {project.workerProfileImage}
                                workerName = {project.workerName}
                                service = {project.service}
                                time = {project.time}
                                currency = {project.currency}
                                rate = {project.rate}/>
            ))}
        </View>
    )
}

export default ProjectsToday

const ProjectsTodayCard = (props) => {
    return <View style={ProjectsTodayStyle.projectCard}>
    <View style={ProjectsTodayStyle.profilePicContainer}>
        <Image style={ProjectsTodayStyle.profileImage} 
               resizeMode='cover'
               source={props.workerProfileImage} />
    </View>
    <View style={ProjectsTodayStyle.projectDetailsContainer}>
        <View style={ProjectsTodayStyle.projectDetailsLabels}>
            <Text style={ProjectsTodayStyle.projectHightlight}>{props.workerName}</Text>
            <Text style={ProjectsTodayStyle.projectDescription}>{props.service}</Text>
            <Text style={ProjectsTodayStyle.projectDescription}>{props.time}</Text>
        </View>
        <View style={ProjectsTodayStyle.projectRateLabels}>
            <Text style={ProjectsTodayStyle.projectRate}>{props.currency}{props.rate}/hr</Text>
        </View>
    </View>
</View>
}
