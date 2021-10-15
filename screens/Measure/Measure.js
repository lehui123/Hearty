import React from 'react';
import {View, Text} from 'react-native';
import AppButton from '../../components/AppButton';
export default function Measure({navigation}) {
    return (
        <View>
            <Text>This is the Measurement page</Text>
            <AppButton onPress={() =>navigation.navigate('History')} title = "History"/>
            
        </View>
    );
}

