import { ScaledSheet } from 'react-native-size-matters';

const CProjectsScreenStyle = ScaledSheet.create({

    container:
    {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: '30@s',
        alignItems: 'center',
        marginLeft: '20@s',
        marginTop: '15@s'
    },

    navigations: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    navItem: {
        paddingVertical: '10@s',
        borderBottomColor: 'green'
    },

    navLabel: {
        fontSize: '11@s',
        letterSpacing: '1@s'
    }

});

export default CProjectsScreenStyle;