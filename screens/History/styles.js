import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
import { Dimensions } from 'react-native';


const WIDTH = Math.round(Dimensions.get('window').width)
const HEIGHT = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        //alignContent: 'center',
        alignItems: "center",
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary
    },
    infoContainer:{
        paddingTop: 20,
        alignContent: 'center',
        alignItems: "center",
        padding: 20,
        width:Dimensions.get("window").width * 0.80,
        height: HEIGHT * 0.7,
        backgroundColor: Colour.secondary,
        marginBottom: 30,
    },
    titleHeader: {
        fontSize:25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colour.brand,
        paddingTop: 10,

    },
    itemHeader: {
        fontSize: 15,
        color: Colour.tertiary,
        paddingLeft: 10,
   

    },
    dateHeader: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colour.tertiary
    },
    styleButton:{
        // marginTop: HEIGHT/25,
        backgroundColor:Colour.tertiary,
        // width:200,
        // height:60,
        // borderRadius: 20,
        width:Dimensions.get("window").width * 0.35,
        height:Dimensions.get("window").height * 0.10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
       // alignContent: 'center'

    },
    styleButtonText:{
        color: Colour.primary,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",

    }
})
export default styles;