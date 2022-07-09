import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../../../utils/Colors';
import { fonts } from '../../../../utils/Fonts';
import { FontWeight } from '../../../../utils/Types';

interface ISectionStylesProps {
    container: ViewStyle;
    title: TextStyle;
    value: TextStyle;
    titleContainer: ViewStyle;
    valueContainer: ViewStyle;
    highlight: ViewStyle;
}

const SectionStyles = StyleSheet.create<ISectionStylesProps>({
    container: {
        flexDirection: 'row',
    },
    titleContainer: {
        width: '40%',
        padding: 10,
    },
    title: {
        color: colors.black,
        fontWeight: fonts.weight.thick as FontWeight,
    },
    valueContainer: {
        width: '60%',
        flexShrink: 1,
        padding: 10,
    },
    value: {
        color: colors.black,
        lineHeight: 20,
        textAlign: 'left',
    },
    highlight: {
        backgroundColor: colors.lightBlue,
    },
});

export default SectionStyles;
