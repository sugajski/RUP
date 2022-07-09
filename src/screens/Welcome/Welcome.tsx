import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppSelector } from '../../redux/Hooks';
import Localization from '../../utils/languages/Localization';
import NumberButtonsTable from './components/NumberButtonsTable/NumberButtonsTable';
import WelcomeStyles from './WelcomeStyles';

const Welcome = () => {
    const { numberOfUsers } = useAppSelector(state => state);

    console.log('numberOfUsers: ', numberOfUsers);

    return (
        <SafeAreaView style={WelcomeStyles.container}>
            <Text style={WelcomeStyles.screenTitle}>{Localization.t('welcomeTitle')}</Text>
            <NumberButtonsTable />
        </SafeAreaView>
    );
};

export default Welcome;
