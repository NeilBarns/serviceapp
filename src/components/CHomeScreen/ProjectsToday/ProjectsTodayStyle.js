import { ScaledSheet } from 'react-native-size-matters';

const ProjectsTodayStyle = ScaledSheet.create({
    
    container: 
    {
        padding: '13@s',
        paddingBottom: '0@s',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    projectCard:
    {   
        width: '100%',
        flexDirection: 'row',
        padding: '10@s',
        paddingTop: '20@s',
        paddingBottom: '20@s',
        borderBottomColor: '#eee',
        borderBottomWidth: '2@s'
    },

    profilePicContainer:
    {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    profileImage:
    {
        height: '50@s',
        width: '50@s',
        borderRadius: '50@s'
    },

    projectDetailsContainer:
    {
        flex: 0.8,
        flexDirection: 'row'
    },

    projectDetailsLabels:
    {
        flex: 0.7,
        paddingLeft: '10@s',
        justifyContent: 'center'
    },

    projectHightlight:
    {
        fontWeight: 'bold',
        fontSize: '13@s'
    },

    projectDescription:
    {
        fontSize: '12@s',
        color: '#bfb4bc'
    },

    projectRateLabels:
    {
        flex: 0.3,
        justifyContent: 'center'
    },

    projectRate:
    {
        fontSize: '20@s'
    }
})

export default ProjectsTodayStyle
