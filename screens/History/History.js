import React, {useState} from 'react';
import {View, TouchableOpacity,Text,FlatList} from 'react-native';
import AppButton from '../../components/AppButton';

import { auth, db } from '../../config';

export default function History({navigation}) {
    const [hist,setHist] = useState([])
    db
    .ref('/users/'+auth.currentUser.uid+'/records')
    .once('value')
    .then(snapshot => {
        setHist(snapshot.val())
    })
    let history = [];
    
    for (const [key, value] of Object.entries(hist)) { 
        const obj = {}
        const alltime = {};
        for (const[ky,val] of Object.entries(value)){
            const vl = '';

            for (const[k,v] of Object.entries(val)){
                vl = v;
            }

            alltime[ky] = vl 
        }          
            
        obj[key] = alltime
        history.push(obj)

    }
      




    return (
        <View>
            <AppButton
            onPress={() => console.log(history)}
            >
            <Text
            style = {{textAlign: 'center'}}>Test</Text>
            </AppButton>
            
        </View>
    );
}
