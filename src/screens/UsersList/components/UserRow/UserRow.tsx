import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useAppSelector } from '../../../../redux/Hooks';
import { IUserProps } from '../../../../utils/Types';

import UserRowStyles from './UserRowStyles';

interface IUserRowProps {
    user: IUserProps;
    index: number;
    onPress: () => void;
};

export const UserRow: FC<IUserRowProps> = ({ user, index, onPress }) => {
    const { numberOfUsers } = useAppSelector(state => state);
    const isFirst = index === 0;
    const isLast = index + 1 === numberOfUsers;
    return (
        <TouchableOpacity
            style={[
                UserRowStyles.container,
                !isLast && UserRowStyles.bottomBorder,
            ]}
            onPress={onPress}
        >
            <Image source={{ uri: user.picture.large }} style={UserRowStyles.image} />
            <Text style={UserRowStyles.name}>{user.name.first} {user.name.last}</Text>
        </TouchableOpacity>
    );
};
