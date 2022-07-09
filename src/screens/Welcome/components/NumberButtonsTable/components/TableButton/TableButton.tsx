import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { setNumberOfUsers } from '../../../../../../redux/actions/Users.action';
import { useAppDispatch } from '../../../../../../redux/Hooks';
import { colors } from '../../../../../../utils/Colors';
import { metrics } from '../../../../../../utils/Metrics';
import TableButtonStyles from './TableButtonStyles';

interface IButton {
    number: number;
    size: string;
    color: string;
};

interface ITableButtonProps {
    button: IButton;
};

const TableButton: FC<ITableButtonProps> = ({ button }) => {
    const dispatch = useAppDispatch();

    const pressNumber = (number: number) => dispatch(setNumberOfUsers(number));

    return (
        <TouchableOpacity key={button.number} onPress={() => pressNumber(button.number)}>
            <View
                style={[
                    TableButtonStyles.container,
                    button.size === metrics.buttonSizes.small
                        ? TableButtonStyles.smallWidth
                        : TableButtonStyles.regularWidth,
                    button.color === colors.blue
                        ? TableButtonStyles.blueBackground
                        : TableButtonStyles.lightBlueBackground,
                ]}>
                <Text style={TableButtonStyles.title}>{button.number}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TableButton;
