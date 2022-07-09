import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome/Welcome';
import { RootStackParamList } from '../utils/Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NotLoggedInNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
);

export default NotLoggedInNavigator;
