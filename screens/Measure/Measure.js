import React, {useState} from 'react';
import {SafeAreaView, Text,TouchableOpacity,View} from 'react-native';
import Colour from '../../components/Colour';
import { auth, db } from '../../config';
import styles from './styles';
const realtimeBPMvalue = 180
export default function Measure ({navigation}) {
    const [measure,setMeasure] = useState(false)
    const [BPM, setBPM] = useState()
    const startmeasure = () => {
        db
        .ref('/instruct')
        .set({
            toggle: 'on',
            uid: auth.currentUser.uid,
          })
        setMeasure(true)
    }
    const stopmeasure = () => {
        db
        .ref('/instruct')
        .set({
            toggle: 'off',
            uid: auth.currentUser.uid,
          })
        setMeasure(false)
    }
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <View style = {styles.innerContainer}>
            <Text style = {styles.header}>Status: {measure? ('Connected'): ('Disconnected')} </Text> 
            </View>
            {/* <TouchableOpacity
                style={styles.styleButton}
                onPress={() => console.log('Button tapped')}
                >
                <Text style={styles.styleButtonText}>Disconnect</Text>
            </TouchableOpacity> */}
            <View style = {styles.innerContainer}>
            <Text style = {styles.body}>BPM</Text>
            </View>
            <View style = {styles.circle}>
            <Text style = {styles.boxHeader}> {realtimeBPMvalue} </Text>
            </View>
            <TouchableOpacity
                style={styles.styleButton}
                onPress={measure? (stopmeasure) : (startmeasure)}
                >
                <Text style={styles.styleButtonText}>{measure? ('Stop') : ('Measure')} </Text>
            </TouchableOpacity>
        </SafeAreaView>
                
    );
}

