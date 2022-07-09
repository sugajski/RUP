import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { colors } from "../../../../utils/Colors";
import { metrics } from "../../../../utils/Metrics";
import { FontWeight } from "../../../../utils/Types";

interface INumberButtonsTableStylesProps {
    container: ViewStyle;
};

const NumberButtonsTableStyles = StyleSheet.create<INumberButtonsTableStylesProps>({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
    },
});

export default NumberButtonsTableStyles;
