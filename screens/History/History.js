import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity,Text,FlatList,StyleSheet, SectionList} from 'react-native';
import AppButton from '../../components/AppButton';

import { auth, db } from '../../config';
import styles from '../History/styles';

export default function History({navigation}) {
    //const [hist,setHist] = useState([])
    const [History, setHistory] = useState([])
    
    useEffect(() => {
    db
    .ref('/users/'+auth.currentUser.uid+'/records')
    .once('value')
    .then(snapshot => {
        // setHist(snapshot.val())
        let history = [];
    
        for (const [key, value] of Object.entries(snapshot.val())) { 
    
            const alltime = [];
    
            for (const[ky,val] of Object.entries(value)){
                const vl = '';
                
                for (const[k,v] of Object.entries(val)){
                    vl = v;
                    
                }
                const obj2 = {'time': ky, 'BPM': vl}
                alltime.push(obj2)
            }          
                
            const obj1 = {'date': key, 'data': alltime}
            history.push(obj1)
    
        }
        setHistory(history)
    })
    }, []);





    return (
        // <div> 
        //     {history.map(obj => (
        //         obj['records'].map((record,idx)=>
        //         <div>
        //             {idx === 0 ? obj['date']:""}
        //             <li>
        //                 {"time: "+ record['time'] + "--->" + "BPM: " + record['BPM']}
        //             </li>
        //         </div>  )
        //     ))}
        // </div>
        <View style = {styles.container}>
        <Text style = {styles.titleHeader}> History </Text>
        <View style = {styles.infoContainer}>
        <SectionList
        sections={History}
        renderItem={({item}) => <Text style = {styles.itemHeader}>{item.time} : {item.BPM}</Text>}
        renderSectionHeader={({section}) => <Text style = {styles.dateHeader}>{section.date}</Text>}
        keyExtractor={(item, index) => index}
        />
        </View>
        <View style = {{justifyContent: 'center'}}>
        <TouchableOpacity
        style={styles.styleButton}
        onPress={() =>{navigation.navigate('Profile Page')}}
        >
        <Text style={styles.styleButtonText}>Profile</Text>
        </TouchableOpacity>
        </View>
        </View>



    )
    
 }
