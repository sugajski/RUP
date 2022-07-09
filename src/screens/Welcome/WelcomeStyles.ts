import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../utils/Colors';
import { fonts } from '../../utils/Fonts';
import { FontWeight } from '../../utils/Types';

interface IWelcomeStylesProps {
    container: ViewStyle;
    screenTitle: TextStyle;
}

const WelcomeStyles = StyleSheet.create<IWelcomeStylesProps>({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTitle: {
        textAlign: 'center',
        color: colors.black,
        fontWeight: fonts.weight.medium as FontWeight,
        fontSize: fonts.sizes.regular,
        marginHorizontal: 20,
        lineHeight: 24,
    },
});

export default WelcomeStyles;
