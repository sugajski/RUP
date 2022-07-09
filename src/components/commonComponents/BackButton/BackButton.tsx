import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { images } from '../../../utils/Images';
import BackButtonStyles from './BackButtonStyles';

interface IBackButtonProps {
    onPress: () => void;
};

export const BackButton: FC<IBackButtonProps> = ({ onPress }) => {
    const insets = useSafeAreaInsets();
    return (
        <TouchableOpacity style={[BackButtonStyles.container, { top: insets.top + 20 }]} onPress={onPress} testID='backButton'>
            <Image source={images.arrow} style={BackButtonStyles.icon} />
        </TouchableOpacity>
    );
};
