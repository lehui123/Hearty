// import { StyleSheet, StatusBar, Platform } from 'react-native'
// import Colour from '../../components/Colour'
// import Constants from "expo-constants";
// const styles = StyleSheet.create({
//     styleContainer: {
//         flex: 1,
//         letterSpacing: 1,
//         padding: 20,
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: Colour.primary,

//     },
//     innerContainer: {
//         marginTop:60,
//         width:'100%',
//         alignItems: 'flex-start',
//     },
//     buttonContainer: {
//         marginTop:60,
//         width:'100%',
//         alignItems: 'center',
//     },
//     header: {
//         fontSize: 40,
//         textAlign: 'left',
//         //marginTop: 20,
//         //marginBottom: 20,
//         padding: 20,
//         fontWeight: 'bold',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         color: Colour.brand
//     },    
//     body: {
//         //marginBottom: 20,
//         //fontWeight: 'bold',
//         padding: 25,
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         //Color: Colour.tertiary
//     },  
//     box: {
//         fontSize: 25,
//         textAlign: 'left',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         marginLeft: 40,
//         padding: 10,
//     },
//     styleButton:{
//         marginTop: 40,
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
        backgroundColor: Colour.primary,

    },
    innerContainer: {
        width:Dimensions.get("window").width * 1,
        alignItems: 'flex-start',
    },
    buttonContainer: {
        marginTop:HEIGHT/40,
        //width:Dimensions.get("window").width * 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'left',

        paddingTop: HEIGHT/15,
        padding: 20,
        fontWeight: 'bold',
        color: Colour.brand
    },    
    body: {
        padding: HEIGHT/30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },  
    box: {
        fontSize: 20,
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: WIDTH/30,
        padding: HEIGHT/90,
        width:Dimensions.get("window").width * 1,
    },
    styleButton:{
        marginTop: HEIGHT/20,

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

});

export default styles;
