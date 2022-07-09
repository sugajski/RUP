import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../../../components/commonComponents';
import { colors } from '../../../../utils/Colors';
import Localization from '../../../../utils/languages/Localization';
import UsersListPlaceholderStyles from './UsersListPlaceholderStyles';

interface IUsersListPlaceholderProps {
    tryAgain: () => void;
};

export const UsersListPlaceholder: FC<IUsersListPlaceholderProps> = ({ tryAgain }) => (
    <View style={UsersListPlaceholderStyles.container}>
        <Text style={UsersListPlaceholderStyles.title}>{Localization.t('usersListPlaceholder')}</Text>
        <Button title={Localization.t('tryAgain')} color={colors.lightBlue} onPress={tryAgain} />
    </View>
);
