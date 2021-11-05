import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import styles from './styles';
import routes from '../../navigation/routes';

export default function Hospital({navigation}) {
    return (
        <ScrollView>
        <SafeAreaView style = {styles.styleContainer}>
            <SafeAreaView style = {styles.innerContainer}>
            <Text style = {styles.mainHeader}>Cardiac Hospitals in Singapore</Text>
            <Text style = {styles.header}> Central </Text>
            </SafeAreaView>
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
            <Text style={styles.styleButtonText}>National University Heart Centre</Text>
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

            <TouchableOpacity
            style={styles.styleButton2}
            onPress={() =>{navigation.navigate(routes.INFOPAGE)}}
            >
            <Text style={styles.styleButtonText2}>Information</Text>
            </TouchableOpacity>
        
        </SafeAreaView>
        </ScrollView>
        
        
    );
}
