import React from 'react';
import {SafeAreaView, Text,TouchableOpacity,View} from 'react-native';
import Colour from '../../components/Colour';
import styles from './styles';
const realtimeBPMvalue = 180
export default function Measure ({navigation}) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <View style = {styles.innerContainer}>
            <Text style = {styles.header}>Status: Connected </Text> 
            </View>
            <TouchableOpacity
                style={styles.styleButton}
                onPress={() => console.log('Button tapped')}
                >
                <Text style={styles.styleButtonText}>Disconnect</Text>
            </TouchableOpacity>
            <View style = {styles.innerContainer}>
            <Text style = {styles.body}>BPM</Text>
            </View>
            <View style = {styles.circle}>
            <Text style = {styles.boxHeader}> {realtimeBPMvalue} </Text>
            </View>
            <TouchableOpacity
                style={styles.styleButton}
                onPress={() => console.log('Button tapped')}
                >
                <Text style={styles.styleButtonText}>Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
                
    );
}

