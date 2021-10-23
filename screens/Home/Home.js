import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect,useState, setState} from 'react';
import {SafeAreaView, Text,View} from 'react-native';
import { auth,db } from '../../config';
import AppButton from '../../components/AppButton';
import styles from './styles';
import Signup from '../Signup/Signup';
import {onValue} from "firebase/database";


export default function Home(props) { 
    const [user,setUser] = useState()
    db
    .ref('/users/'+auth.currentUser.uid+'/name')
    .once('value')
    .then(snapshot => {
       setUser(snapshot.val())
    });
    const lastBPMvalue = 10
    const BPMstatus = 'Abnormal'
    return (
        <SafeAreaView style = {styles.background}>
            <Text style = {styles.header}>Hi, {user}</Text>
            <Text style = {styles.box}>Last BPM reading</Text>
            <View style = {styles.container}>
            <Text style = {styles.boxheader}> {lastBPMvalue} </Text>
            </View>
            <Text style = {styles.box}>BPM status</Text>
            <View style = {styles.container}>
            <Text style = {styles.boxheader2}> {BPMstatus} </Text>
            </View>

        </SafeAreaView>
            

    );
}
