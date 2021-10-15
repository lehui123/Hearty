import React from 'react';
import {View, Text} from 'react-native';
import AppButton from '../../components/AppButton';
export default function History({navigation}) {
    return (
        <View>
            <Text>This is the history page</Text>
            <Text>This page shows the history of bpm </Text>
            <AppButton onPress={() =>navigation.navigate('Profile')} title = "Profile"/>
        </View>
    );
}
