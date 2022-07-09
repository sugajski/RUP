import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import NotLoggedInNavigator from './navigation/NotLoggedInNavigator';
import { store } from './redux/Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <NotLoggedInNavigator />
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
