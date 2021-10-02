import { StyleSheet } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
const styles = StyleSheet.create({
    background: {
        flex:1,
        padding: 20,
        paddingTop: Constants.statusBarHeight+20,
        backgroundColor: Colour.primary,
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
        justifyContent: 'center',
    },
    logo: {
        width: 180,
        height: 180,
    },
    imageSize:{
        width: 100,
        height: 80,
        padding: 10
    },
    logoContainer: {
        flex:1,
        width:'100%',
        alignItems: 'center',
    },
    tagline: {
        fontSize:30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colour.brand,
        padding: 10,
    },
    maintext: {
        flexShrink:1,
        fontSize: 18,
        color: Colour.tertiary,
        padding: 10,
    },
})

export default styles