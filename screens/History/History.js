import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity,Text,FlatList,StyleSheet, SectionList} from 'react-native';
import AppButton from '../../components/AppButton';

import { auth, db } from '../../config';

export default function History({navigation}) {
    const [hist,setHist] = useState([])
    const [History, setHistory] = useState([])
    
    useEffect(() => {
    db
    .ref('/users/'+auth.currentUser.uid+'/records')
    .once('value')
    .then(snapshot => {
        setHist(snapshot.val())
    })
    }, []);

    let history = [];
    
    for (const [key, value] of Object.entries(hist)) { 

        const alltime = [];

        for (const[ky,val] of Object.entries(value)){
            const vl = '';
            
            for (const[k,v] of Object.entries(val)){
                vl = v;
                
            }
            const obj2 = {'time': ky, 'BPM': vl}
            alltime.push(obj2)
        }          
            
        const obj1 = {'date': key, 'records': alltime}
        history.push(obj1)

    }
    setHistory(history)


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
        <SectionList
        sections={History}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text >{section.date}</Text>}
        keyExtractor={(item, index) => index}
        />

        

    )
    
 }
const styles = StyleSheet.create({

    container: {
      marginTop: 20,
      flex: 1,
    },
    row: {
    
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
      flexDirection: 'column',
 
    },
    textformat:{
        color: '#000000',
        fontSize: 10,
    }
  })
