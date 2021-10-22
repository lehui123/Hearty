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
    header: {
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
        padding: HEIGHT/95,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButton: {
        marginTop: HEIGHT/25,
        backgroundColor: Colour.tertiary,
        width:Dimensions.get("window").width * 0.60,
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

    }



});

export default styles;