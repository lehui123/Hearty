import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const username = 'Xiaoming'
const gender = 'female'
const age = 25
const lastbpm = 139
const bpmHistory = 'Day1: 130'

function Profile (props) {
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>User Profile</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Name: {username} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Gender: {gender} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Age: {age} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Last BPM: {lastbpm} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>BPM History</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.fillbackground}>
            <Text style = {styles.box}> {bpmHistory} </Text>
            </SafeAreaView>
        </SafeAreaView>
    
    );
}

export default Profile
