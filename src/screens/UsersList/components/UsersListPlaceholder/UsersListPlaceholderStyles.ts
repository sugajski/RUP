import { StyleSheet } from "react-native";

import { colors } from "../../../../utils/Colors";
import { fonts } from "../../../../utils/Fonts";

const UsersListPlaceholderStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    title: {
        textAlign: 'center',
        lineHeight: 24,
        fontSize: fonts.sizes.regular,
        color: colors.black,
        marginBottom: 20,
    },
});

export default UsersListPlaceholderStyles;
