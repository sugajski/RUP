import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { colors } from "../../../../../../utils/Colors";
import { fonts } from "../../../../../../utils/Fonts";
import { metrics } from "../../../../../../utils/Metrics";
import { FontWeight } from "../../../../../../utils/Types";

interface ITableButtonStylesProps {
    container: ViewStyle;
    title: TextStyle;
    blueBackground: ViewStyle;
    lightBlueBackground: ViewStyle;
    smallWidth: ViewStyle;
    regularWidth: ViewStyle;
};

const TableButtonStyles = StyleSheet.create<ITableButtonStylesProps>({
    container: {
        height: 56,
        borderWidth: 1,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontWeight: fonts.weight.thick as FontWeight,
    },
    blueBackground: {
        backgroundColor: colors.blue,
    },
    lightBlueBackground: {
        backgroundColor: colors.lightBlue,
    },
    smallWidth: {
        width: (metrics.screenWidth - 40) / 3,
    },
    regularWidth: {
        width: (metrics.screenWidth - 40) * 2 / 3,
    },
});

export default TableButtonStyles;
