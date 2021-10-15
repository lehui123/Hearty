import React from 'react';
import {SafeAreaView, Text, Linking,Button} from 'react-native';
import styles from './styles';

const healthInfo = 'statusOfHealth'
export default function InfoPage(props) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>Information</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.box}>
            <Text style = {styles.body}> {healthInfo} </Text>
            <Button title= "Heart Rate Information" onPress= {() => Linking.openURL('https://medicalnewstoday.com/articles/235710')}/>
            </SafeAreaView>
        </SafeAreaView>
    );
}
