import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Localization from '../../utils/languages/Localization';
import NumberButtonsTable from './components/NumberButtonsTable/NumberButtonsTable';
import WelcomeStyles from './WelcomeStyles';

const Welcome = () => (
    <SafeAreaView style={WelcomeStyles.container}>
        <Text style={WelcomeStyles.screenTitle} testID='welcomeScreenTitle'>{Localization.t('welcomeTitle')}</Text>
        <NumberButtonsTable />
    </SafeAreaView>
);

export default Welcome;
