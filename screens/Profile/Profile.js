import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import { auth, db } from '../../config';
import AppButton from '../../components/AppButton';
const username = 'Xiaoming'
const gender = 'female'
const age = 25
const lastbpm = 139
const bpmHistory = 'Day1: 130'
function Profile ({navigation}) {
    const Logout = () => {
        auth
        .signOut()
        .then(()=>{
        navigation.navigate('LoginNavi');
        })
        .catch((error) => alert(error.message));  
    }
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>User Profile</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.body}>
            <Text style = {styles.box}>Name: {} </Text>
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
            <AppButton onPress={() => {navigation.navigate('History')}} title = "History"/>
            <AppButton onPress={Logout} title = "Log out"/>
        </SafeAreaView>

    );
}

export default Profile
