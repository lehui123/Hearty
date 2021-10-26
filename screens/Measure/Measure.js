import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text,TouchableOpacity,View} from 'react-native';
import Colour from '../../components/Colour';
import { auth, db } from '../../config';
import styles from './styles';
import { useInterval } from '../../utils';
export default function Measure ({navigation}) {
    const [measure,setMeasure] = useState(false)
    const [BPM, setBPM] = useState()
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hour = new Date().getHours()
    var hours = ("0" + hour).slice(-2)
    var min = new Date().getMinutes()
    var mins = ("0" + min).slice(-2)
    var sec = new Date().getSeconds()
    var secs = ("0" + sec).slice(-2)
    var times = hours+':'+ mins+':'+secs
    var dates = date+'-'+month+'-'+year
    // const fetchData = () =>{

    useInterval(()=>{
             
        db
        .ref('/users/'+auth.currentUser.uid+'/BPM_Value')
        .once('value')
        .then(snapshot => {
            setBPM(snapshot.val())

        })
        if (measure){  
        db
        .ref('/users/'+auth.currentUser.uid+'/records/'+ String(dates))
        .child(times)
        .set({
            BPM
        })
    }

    })
    
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

