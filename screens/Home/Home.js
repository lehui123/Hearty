import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { auth } from '../../config';
import AppButton from '../../components/AppButton';
import styles from './styles';
export default function Home({navigation}) { 
    const Logout = () => {
        auth
        .signOut()
        .then(()=>{
        navigation.navigate('Login');
        })
        .catch((error) => alert(error.message));  
    }
    const lastBPMvalue = 10
    const BPMstatus = 20
    return (
        <SafeAreaView style = {styles.background}>
            <SafeAreaView style = {styles.header}>
            <Text style = {styles.header}>Hi {auth?.currentUser?.displayName},</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Last BPM reading</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}> {lastBPMvalue} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>BPM status</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}> {BPMstatus} </Text>
            </SafeAreaView>
            <AppButton onPress={Logout} title = "Log out"/>
        </SafeAreaView>
            

    );
}
