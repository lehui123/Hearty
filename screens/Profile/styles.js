import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        letterSpacing: 1,
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary
    },
    innerContainer: {
        //flex:1,
        width:'100%',
        alignItems: 'left',
        marginLeft: 40,
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        //marginTop: 20,
        //marginBottom: 20,
        padding: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand
    },    
    body: {
        //marginBottom: 20,
        //fontWeight: 'bold',
        padding: 10,
        justfyContent: 'left',
        alignItems: 'left',
        //Color: Colour.tertiary
    },  
    box: {
        fontSize: 20,
        textAlign: 'left',
        justfyContent: 'left',
        alignItems: 'left',
        
    }  

});

export default styles;
