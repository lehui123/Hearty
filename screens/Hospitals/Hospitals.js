import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';

export default function Hospitals({navigation}) {
     return (
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text>Cardiac Hospitals in Singapore</Text>
            <Text style = {styles.header}> Central </Text>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.ah.com.sg/Pages/Make--Change-My-Appointment.aspx')}
            >
            <Text style={styles.styleButtonText}>Alexandra Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.sgh.com.sg/patient-care/visiting-specialist/make-or-change-appointment')}
            >
            <Text style={styles.styleButtonText}>Singapore General Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Cardiology/Pages/default.aspx')}
            >
            <Text style={styles.styleButtonText}>Tan Tock Seng Hospital</Text>
            </TouchableOpacity>
            <Text style = {styles.header}> West </Text>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.nhcs.com.sg/')}
            >
            <Text style={styles.styleButtonText}>National Heart Centre</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.nuhcs.com.sg/I-Want-To/Pages/Contact-NUHCS.aspx')}
            >
            <Text style={styles.styleButtonText}>National University Heart Centre Singapore</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.ntfgh.com.sg/Our-Services/Clinical-Services/Pages/Cardiology.aspx')}
            >
            <Text style={styles.styleButtonText}>Ng Teng Fong General Hospital</Text>
            </TouchableOpacity>
            <Text style = {styles.header}> East </Text>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.cgh.com.sg/centres-services/Pages/Cardiology.aspx')}
            >
            <Text style={styles.styleButtonText}>Changi General Hospital</Text>
            </TouchableOpacity>
            <Text style = {styles.header}> North </Text>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.cgh.com.sg/centres-services/Pages/Cardiology.aspx')}
            >
            <Text style={styles.styleButtonText}>Khoo Teck Puat Hospital</Text>
            </TouchableOpacity>
            <Text style = {styles.header}> North-East </Text>
            <TouchableOpacity
            style={styles.styleButton}
            onPress={() => Linking.openURL('https://www.skh.com.sg/patient-care/specialties-services/NHCS-Cardiology-@-SKH')}
            >
            <Text style={styles.styleButtonText}>Sengkang General Hospital</Text>
            </TouchableOpacity>
            <AppButton onPress={() =>navigation.navigate('InfoPageNavigator')} title = "Information"/>
            </SafeAreaView>
        </SafeAreaView>
    );
}

