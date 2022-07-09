import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { BackHandler, Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from '../../components/commonComponents';
import { images } from '../../utils/Images';
import Localization from '../../utils/languages/Localization';
import { RootStackParamList } from '../../utils/Types';
import Section from './components/Section/Section';
import { formatUserData } from './UserDetails.helper';
import UserDetailsStyles from './UserDetailsStyles';

type UserDetailsProps = NativeStackScreenProps<RootStackParamList, 'UserDetails'>

const UserDetails: FC<UserDetailsProps> = ({ navigation, route }) => {
    const { formattedPicture, formattedName, formattedLastname, formattedAge,
        formattedBirthDate, formattedPhone, formattedEmail, formattedAddress } = formatUserData(route.params.user);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
        return () => BackHandler.removeEventListener('hardwareBackPress', goBack);
    }, []);

    const goBack = () => {
        navigation.goBack();
        return true;
    };

    return (
        <ScrollView style={UserDetailsStyles.container} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={UserDetailsStyles.content}>
                <BackButton onPress={goBack} />
                <View>
                    <View style={UserDetailsStyles.imageShadow} />
                    <Image source={formattedPicture} style={UserDetailsStyles.image} />
                </View>
                <View style={UserDetailsStyles.detailsContainer}>
                    <Section title={Localization.t('userDetailsName')} value={formattedName} highlightValue />
                    <Section title={Localization.t('userDetailsLastname')} value={formattedLastname} highlightTitle />
                    <Section title={Localization.t('userDetailsAge')} value={formattedAge} highlightValue testID='ageSection' />
                    <Section title={Localization.t('userDetailsBirthDate')} value={formattedBirthDate} highlightTitle />
                    <Section title={Localization.t('userDetailsPhone')} value={formattedPhone} highlightValue />
                    <Section title={Localization.t('userDetailsEmail')} value={formattedEmail} highlightTitle />
                    <Section title={Localization.t('userDetailsAddress')} value={formattedAddress} highlightValue />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default UserDetails;
