import { ScaledSheet } from 'react-native-size-matters';

const CProjectCreationWhenWhereStyle = ScaledSheet.create({
    
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 0
    },

    labelStyle:
    {
        fontSize: '14@s',
        color: '#85807f',
        textAlign: 'center',
        paddingBottom: '15@s'
    },

    mainContainer:{
        paddingHorizontal: '15@s',
        marginBottom: '20@s'
    },

    calendar:
    {
        marginTop: '15@s'
    },

    timeDetailsContainer:{
        flexDirection: 'row',
        marginTop: '20@s',
        borderTopWidth: '2@s',
        borderColor: '#e0dfdc',
        padding: '10@s',
        paddingTop: '20@s'        
    },

    timeDetailIconLabel:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    timeDetailsIcon:{
        fontSize: '20@s'
    },

    timeDetailsLabel:{
        fontSize: '12@s',
        marginLeft: '5@s',
    },

    timeChangerContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    timeChangerLabel:{
        fontSize: '11@s',
        color: 'blue',
        textDecorationLine: 'underline'
    },

    locationDetailsContainer:{
        flexDirection: 'row',
        marginTop: '2@s',
        borderTopWidth: 0,
        borderColor: '#e0dfdc',
        padding: '10@s'       
    },

    locationDetailIconLabel:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationDetailsIcon:{
        fontSize: '20@s'
    },

    locationDetailsLabel:{
        fontSize: '12@s',
        marginLeft: '5@s',
    },

    locationChangerContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    locationChangerLabel:{
        fontSize: '11@s',
        color: 'blue',
        textDecorationLine: 'underline'
    },

    continueTouchableOpacityContainer:
    {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: '10@s',
        width: '100%'
    },

    backTouchableOpacity:
    {
        // backgroundColor: '#eb6e65',
        backgroundColor: 'white',
        padding: '12@s',
        borderRadius: '10@s',
        elevation: 5       
    },

    backTouchableOpacityIcon:
    {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20@s'       
    },

    continueTouchableOpacity:
    {
        flex: 1,
        backgroundColor: '#eb6e65',
        padding: '15@s',
        borderRadius: '10@s',
        elevation: 5,
        marginLeft: '5@s'   
    },

    continueTouchableOpacityLabel:
    {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14@s'       
    }
});

export default CProjectCreationWhenWhereStyle;
