import React, { FC } from 'react';
import { Text, View } from 'react-native';

import SectionStyles from './SectionStyles';

interface ISectionProps {
    title: string;
    value: string;
    highlightTitle?: boolean;
    highlightValue?: boolean;
};

const Section: FC<ISectionProps> = ({ title, value, highlightTitle = false, highlightValue = false }) => (
    <View style={SectionStyles.container}>
        <View style={[SectionStyles.titleContainer, highlightTitle && SectionStyles.highlight]}>
            <Text style={SectionStyles.title}>{title}</Text>
        </View>
        <View style={[SectionStyles.valueContainer, highlightValue && SectionStyles.highlight]}>
            <Text style={SectionStyles.value}>{value}</Text>
        </View>
    </View>
);

export default Section;
