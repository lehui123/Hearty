import React from 'react';
import {SafeAreaView, Text, Linking,Button, SectionList, ScrollView} from 'react-native';
import styles from './styles';

const healthInfo = 'statusOfHealth'
export default function InfoPage(props) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>Information</Text>
            </SafeAreaView>
            {/* <SafeAreaView style = {styles.box}>
            <Text style = {styles.body}> Information about Heart Rate </Text>
            <Button title= "Heart Rate Information" onPress= {() => Linking.openURL('https://medicalnewstoday.com/articles/235710')}/>
            <Text style = {styles.body}> Local Hospi </Text>
            </SafeAreaView> */}
            <SectionList>

            </SectionList>
        </SafeAreaView>
    );
}
