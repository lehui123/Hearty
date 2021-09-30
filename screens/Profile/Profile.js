import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function Profile() {
    return (
        <View style = {styles.backgroundContainer}>
            <Text style = {styles.textColor}>Hello this is the profile page</Text>
        </View>
    );
}

