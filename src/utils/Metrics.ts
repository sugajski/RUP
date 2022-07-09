import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
    screenWidth: width < height ? width : height,
    buttonSizes: {
        small: 'small',
        regular: 'regular',
    },
};
