import { StyleSheet } from 'react-native';

import { colors } from '../../utils/Colors';

const UsersListStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 84,
        backgroundColor: colors.white,
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default UsersListStyles;
