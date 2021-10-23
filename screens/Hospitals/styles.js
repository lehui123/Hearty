import { StyleSheet } from 'react-native'
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
        backgroundColor: Colour.primary
    },
    innerContainer: {
        width:Dimensions.get("window").width * 1,
        alignItems: 'center',
    },
    mainHeader: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        padding: HEIGHT/35,
        color: Colour.tertiary,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
        paddingTop: HEIGHT/20,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: "uppercase",
    },
    styleButton: {
        marginTop: HEIGHT/25,
        backgroundColor:Colour.brand,
        width:Dimensions.get("window").width * 0.75,
        height:Dimensions.get("window").height * 0.08,
        //borderRadius: WIDTH * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButtonText:{
        color: Colour.primary,
        fontSize: 16,
        padding: 10,
        textTransform: "uppercase",
        textAlign: 'center',
    },
    styleButton2:{
        marginTop: HEIGHT/30,
        backgroundColor: Colour.tertiary,
        width:Dimensions.get("window").width * 0.55,
        height:Dimensions.get("window").height * 0.10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButtonText2:{
        color: Colour.primary,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }

});

export default styles;