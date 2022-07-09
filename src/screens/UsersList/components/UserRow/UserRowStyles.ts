import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils/Colors';

const UserRowStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 40,
    },
    name: {
        flex: 1,
        textAlign: 'center',
        color: colors.blue,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightBlue,
    },
});

export default UserRowStyles;
