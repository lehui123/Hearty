import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity,Text, SectionList} from 'react-native';
import { auth, db } from '../../config';
import styles from '../History/styles';
import routes from '../../navigation/routes';

export default function History({navigation}) {
    const [History, setHistory] = useState([])
    
    useEffect(() => {
    db
    .ref('/users/'+auth.currentUser.uid+'/records')
    .once('value')
    .then(snapshot => {
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
        onPress={() =>{navigation.navigate(routes.PROFILE)}}
        >
        <Text style={styles.styleButtonText}>Profile</Text>
        </TouchableOpacity>
        </View>
        </View>



    )
    
 }
