import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text,View} from 'react-native';
import { auth } from '../../config';
import AppButton from '../../components/AppButton';
import styles from './styles';
export default function Home(props) { 

    const lastBPMvalue = 10
    const BPMstatus = 20
    return (
        <SafeAreaView style = {styles.background}>
            <Text style = {styles.header}>Hi {auth?.currentUser?.displayName},</Text>
            <Text style = {styles.box}>Last BPM reading</Text>
            <View style = {styles.container}>
            <Text style = {styles.boxheader}> {lastBPMvalue} </Text>
            </View>
            <Text style = {styles.box}>BPM status</Text>
            <View style = {styles.container}>
            <Text style = {styles.boxheader}> {BPMstatus} </Text>
            </View>

        </SafeAreaView>
            

    );
}
