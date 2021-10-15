import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import Colour from '../../components/Colour';
import styles from './styles';
import AppButton from '../../components/AppButton';
const realtimeBPMvalue = 180
export default function Measure ({navigation}) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>Status: Connected </Text> 
            <Button
                title = "Disconnect" 
                onPress={() => console.log("Button tapped")} 
                />
             </SafeAreaView>
             <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.body}>BPM</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.circle}>
            <Text style = {styles.header}> {realtimeBPMvalue} </Text>
            <Button 
                title = "Start" 
                onPress={() => console.log("Button tapped")} 
                />
            </SafeAreaView>
            <AppButton onPress={() =>navigation.navigate('History')} title = "History"/>
        </SafeAreaView>
                
    );
}

