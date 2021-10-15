import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const healthInfo = 'statusOfHealth'
function InfoPage(props) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>Information</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.box}>
            <Text style = {styles.body}> {healthInfo} </Text>
            </SafeAreaView>
        </SafeAreaView>
    );
}

export default InfoPage;