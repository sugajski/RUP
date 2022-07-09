import { CSSProperties } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { colors } from "../../../utils/Colors";
import { fonts } from "../../../utils/Fonts";
import { FontWeight } from "../../../utils/Types";

interface IButtonStylesProps {
    container: ViewStyle;
    title: TextStyle;
};

const ButtonStyles = StyleSheet.create<IButtonStylesProps>({
    container: {
        padding: 12,
        borderRadius: 6,
    },
    title: {
        color: colors.white,
        fontWeight: fonts.weight.thick as FontWeight,
    },
});

export default ButtonStyles;
