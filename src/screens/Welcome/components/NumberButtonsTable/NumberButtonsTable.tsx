import React from 'react';
import { View } from 'react-native';

import { colors } from '../../../../utils/Colors';
import { metrics } from '../../../../utils/Metrics';
import TableButton from './components/TableButton/TableButton';
import NumberButtonsTableStyles from './NumberButtonsTableStyles';

const { buttonSizes: { small, regular } } = metrics;
const { blue, lightBlue } = colors;

const buttons = [
    { number: 2, color: lightBlue, size: small },
    { number: 3, color: blue, size: regular },
    { number: 5, color: blue, size: small },
    { number: 8, color: lightBlue, size: small },
    { number: 12, color: lightBlue, size: small },
    { number: 16, color: blue, size: regular },
    { number: 22, color: blue, size: small },
    { number: 26, color: lightBlue, size: small },
    { number: 34, color: blue, size: small },
    { number: 40, color: lightBlue, size: small },
];

const NumberButtonsTable = () => (
    <View style={NumberButtonsTableStyles.container}>
        {buttons.map(button => <TableButton key={button.number} button={button} />)}
    </View>
);

export default NumberButtonsTable;
