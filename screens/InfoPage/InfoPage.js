import React from 'react';
import {View, Text, Linking,Button} from 'react-native';

export default function InfoPage() {
    return (
        <View>
            <Text>This is the information page</Text>
            <Button title= "Heart Rate Information" onPress= {() => Linking.openURL('https://medicalnewstoday.com/articles/235710')}/>
        </View>
    );
}
