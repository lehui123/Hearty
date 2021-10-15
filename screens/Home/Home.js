import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const lastBPMvalue = 10
const BPMstatus = 20
function Home(props) {
    return (
        <SafeAreaView style = {styles.background}>
            <SafeAreaView style = {styles.header}>
            <Text style = {styles.header}>Hi User,</Text>
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
        </SafeAreaView>
    );
}
export default Home;