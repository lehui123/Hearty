import React from 'react';
import {SafeAreaView, Text, Linking, Button, SectionList, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

const healthInfo = 'statusOfHealth'
export default function InfoPage({navigation}) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>Information</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.box}>
            <Text style = {styles.body}> Normal resting heart rate for adults: 60 - 100 bpm </Text>
            <Text style = {styles.body}> If you suddenly notice a change in your heartbeat that is accompanied by: </Text>
            <Text style = {styles.body}> - shortness of breath </Text>
            <Text style = {styles.body}> - chest tightness or pain </Text>
            <Text style = {styles.body}> - dizziness </Text>
            <Text style = {styles.body}> - fainting </Text>
            <Text style = {styles.body}> It could be a sign of a serious heart complication, and you should seek immediate medical help from the doctors. </Text>
            </SafeAreaView>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() =>{navigation.navigate('Hospitals')}}
            >
            <Text style={styles.styleButtonText}>Cardiac Hospital</Text>
            </TouchableOpacity>
        </SafeAreaView>
        );
    }
