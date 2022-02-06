import { ScaledSheet } from 'react-native-size-matters';

const CDraftProjectsStyle = ScaledSheet.create({

    container:
    {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    itemContainer: {
        flexDirection: 'column',
        paddingHorizontal: '15@s',
        marginBottom: '10@s',
        backgroundColor: 'white',
    },

    itemContainerTop: {
        flexDirection: 'row',
        paddingVertical: '15@s',
        paddingLeft: '15@s'
    },

    itemContainerBottom: {
        borderTopWidth: '1@s',
        borderTopColor: '#cfd4d1',
        flexDirection: 'row',
        paddingLeft: '15@s',
        alignItems: 'center',
        paddingTop: '10@s',
        paddingBottom: '10@s'
    },

    itemContainerLeft: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemContainerRight: {
        paddingLeft: '12@s'
    },

    itemLogo: {
        fontSize: '25@s',
        color: '#eb6e65'
    },

    serviceNameLabel: {
        fontSize: '18@s',
        fontWeight: 'bold'
    },

    otherDetailsLabel: {
        fontSize: '11@s',
        color: '#848a86',
        marginTop: '2@s'
    },

    warningLogo: {
        fontSize: '15@s',
        color: '#848a86'
    },

    warningLabel: {
        fontSize: '11@s',
        paddingLeft: '2@s'
    }
});

export default CDraftProjectsStyle;