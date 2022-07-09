import React, { FC, useEffect } from 'react';
import { ActivityIndicator, BackHandler, FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from '../../components/commonComponents';
import { fetchUsers } from '../../redux/actions/Users.action';
import UsersListStyles from './UsersListStyles';
import { colors } from '../../utils/Colors';
import { UserRow, UsersListPlaceholder } from './components';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import { RootStackParamList, IUserProps } from '../../utils/Types';

type UsersListProps = NativeStackScreenProps<RootStackParamList, 'UsersList'>

const UsersList: FC<UsersListProps> = ({ navigation }) => {
    const { users, numberOfUsers, isFetchingUsers } = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
        getUsers();
        return () => BackHandler.removeEventListener('hardwareBackPress', goBack);
    }, []);

    const goBack = () => {
        navigation.goBack();
        return true;
    }

    const getUsers = () => dispatch(fetchUsers(numberOfUsers) as any);

    const pressUserRow = (user: IUserProps) => console.log('Pressed user: ', user);

    return (
        <SafeAreaView style={UsersListStyles.container}>
            <BackButton onPress={goBack} />
            {isFetchingUsers
                ? <View style={UsersListStyles.loadingContainer}>
                    <ActivityIndicator size='large' color={colors.lightBlue} />
                </View>
                : <>
                    {users.length > 0
                        ? <FlatList
                            data={users}
                            keyExtractor={(user) => user.login.uuid}
                            renderItem={({ item: user, index }) => (
                                <UserRow user={user} index={index} onPress={() => pressUserRow(user)} />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                        : <UsersListPlaceholder tryAgain={getUsers} />}
                </>}
        </SafeAreaView>
    );
};

export default UsersList;
