import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersList from '../screens/UsersList/UsersList';
import UserDetails from '../screens/UserDetails/UserDetails';
import Welcome from '../screens/Welcome/Welcome';
import { RootStackParamList } from '../utils/Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NotLoggedInNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
);

export default NotLoggedInNavigator;
