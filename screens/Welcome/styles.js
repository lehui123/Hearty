import { StyleSheet } from 'react-native'
import Colour from '../../components/Colour'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colour.primary,
    },
    buttonsContainer: {
        padding: 20,
        width: "90%",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
})

export default styles