import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/Colors';

const BackButtonStyles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        backgroundColor: colors.lightBlue,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 20,
        zIndex: 2,
    },
    icon: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
    },
});

export default BackButtonStyles;
