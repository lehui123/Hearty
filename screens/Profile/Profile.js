import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { auth, db } from '../../config';
import routes from '../../navigation/routes';
function Profile ({navigation}) {
    const Logout = () => {
        auth
        .signOut()
        .then(()=>{
        navigation.navigate('Login');
        })
        .catch((error) => alert(error.message));  
    }
    const[info,setInfo]= useState([])
    const[last,setLast]= useState([])
    
    useEffect(() => {
        if (auth.currentUser){
        db
        .ref('/users/'+auth.currentUser.uid)
        .once('value')
        .then(snapshot => {
        setInfo(snapshot.val())
        
        })
        db
        .ref('/users/'+auth.currentUser.uid+'/last_BPM/BPM')
        .once('value')
        .then(snapshot => {
            setLast(snapshot.val())

        })};
    }, []);

    
    return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.header}>User Profile</Text>
            <Text style = {styles.box}>Name: {info? info.name: ''} </Text>
            <Text style = {styles.box}>Gender: {info?info.gender: ''} </Text>
            <Text style = {styles.box}>Age: {info?info.age: ''} </Text>
            <Text style = {styles.box}>Email: {info?info.email: ''} </Text>
            <Text style = {styles.box}>Last BPM: {last? last.BPM : ''} </Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.buttonContainer}>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() =>{navigation.navigate(routes.HISTORY)}}
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
