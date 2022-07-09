import { StyleSheet } from 'react-native';

import { colors } from '../../utils/Colors';

const UserDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        resizeMode: 'contain',
    },
    imageShadow: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colors.lightBlue,
        position: 'absolute',
        left: 10,
    },
    detailsContainer: {
        marginTop: 40,
    },
});

export default UserDetailsStyles;
