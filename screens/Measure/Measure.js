import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text,TouchableOpacity,View} from 'react-native';
import Colour from '../../components/Colour';
import { auth, db } from '../../config';
import styles from './styles';
const realtimeBPMvalue = 180
import { useInterval } from '../../utils';
export default function Measure ({navigation}) {
    const [measure,setMeasure] = useState(false)
    const [BPM, setBPM] = useState()
    useInterval(()=>{
        db
        .ref('/users/'+auth.currentUser.uid+'/BPM_Value')
        .once('value')
        .then(snapshot => {
           setBPM(snapshot.val())
        })
    })
    // const fetchData = () =>{

    
    const startmeasure = () => {
        db
        .ref('/instruct')
        .set({
            toggle: 'on',
            uid: auth.currentUser.uid,
          })
        setMeasure(true)
        // db
        // .ref('/users/'+auth.currentUser.uid+'/BPM_value')
        // .on("value", function (snapshot) {setBPM(snapshot.val)})
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
            <Text style = {styles.boxHeader}> {measure? (BPM): ('-')}</Text>
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

