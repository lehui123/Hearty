// import { StyleSheet, StatusBar, Platform } from 'react-native'
// import Colour from '../../components/Colour'
// import Constants from "expo-constants";

// const styles = StyleSheet.create({
//     styleContainer: {
//         flex: 1,
//         letterSpacing: 1,
//         // padding: 20,
//         paddingTop: Constants.statusBarHeight,
//         alignItems: 'center',
//         justifyContent:'center',
//         backgroundColor: Colour.primary
//     },
//     innerContainer: {
//         //flex:1,
//         width:'100%',
//         alignItems: 'center',
//     },
//     header: {
//         fontSize: 40,
//         textAlign: 'center',
//         //marginTop: 20,
//         //marginBottom: 20,
//         padding: 40,
//         fontWeight: 'bold',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: Colour.brand
//     },    
//     boxHeader:{
//         fontSize: 40,
//         // justifyContent: 'center',
//         textAlign: 'center',
//         letterSpacing: 1,
//         fontWeight: 'bold',
//         color: Colour.brand,
//         marginTop: '30%',
//     },
//     body: {
//         fontSize: 40,
//         textAlign: 'center',
//         //marginBottom: 20,
//         //fontWeight: 'bold',
//         padding: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: Colour.tertiary
//     },  
//     styleButton:{
//         marginTop: 20,
//         backgroundColor: Colour.tertiary,
//         height: 60,
//         width: 150,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     styleButtonText:{
//         color: Colour.primary,
//         fontSize: 18,
//         textTransform: "uppercase",
//         fontWeight: "bold",

//     },
//     circle: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: Colour.secondary
//     }  

// });

// export default styles;
import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

const WIDTH = Math.round(Dimensions.get('window').width)
const HEIGHT = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        letterSpacing: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colour.primary
    },
    innerContainer: {
        width:Dimensions.get("window").width * 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        padding: HEIGHT/35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand
    },    
    boxHeader:{
        fontSize: 45,
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand,
        //marginTop: HEIGHT/10,
    },
    body: {
        fontSize: 40,
        textAlign: 'center',
        padding: HEIGHT/30,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.tertiary
    },  
    styleButton:{
        marginTop: HEIGHT/25,
        backgroundColor: Colour.tertiary,
        width:Dimensions.get("window").width * 0.35,
        height:Dimensions.get("window").height * 0.10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButtonText:{
        color: Colour.primary,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",

    },
    circle: {
        width:Dimensions.get("window").width * 0.60,
        height:Dimensions.get("window").width * 0.60,
        borderRadius:Dimensions.get("window").width * 0.30,
        justifyContent: 'center',
        backgroundColor: Colour.secondary,
    }  

});

export default styles;
