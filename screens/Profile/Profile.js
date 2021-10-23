import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { auth, db } from '../../config';
import AppButton from '../../components/AppButton';
const username = 'Xiaoming'
const gender = 'female'
const age = 25
const lastbpm = '139'
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
    const[info,setInfo]= useState([])
    if (auth.currentUser){
    db
    .ref('/users/'+auth.currentUser.uid)
    .once('value')
    .then(snapshot => {
       setInfo(snapshot.val())
    })};

    
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>User Profile</Text>
            <Text style = {styles.box}>Name: {info? info.name: ''} </Text>
            <Text style = {styles.box}>Gender: {info?info.gender: ''} </Text>
            <Text style = {styles.box}>Age: {info?info.age: ''} </Text>
            <Text style = {styles.box}>Email: {info?info.email: ''} </Text>
            <Text style = {styles.box}>Last BPM: </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.buttonContainer}>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() =>{navigation.navigate('History')}}
            >
            <Text style={styles.styleButtonText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={Logout}
            >
            <Text style={styles.styleButtonText}>Log out</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
       
    );
}

export default Profile
