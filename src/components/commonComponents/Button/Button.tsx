import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ButtonStyles from './ButtonStyles';

interface IButtonProps {
    title: string;
    color: string;
    onPress: () => void;
};

export const Button: FC<IButtonProps> = ({ title, color, onPress }) => (
    <TouchableOpacity style={[ButtonStyles.container, { backgroundColor: color }]} onPress={onPress}>
        <Text style={ButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
);
