import { StyleSheet } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
const styles = StyleSheet.create({
    StyledContainer:{
        flex:1,
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary,
    },
    InnerContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center',
    },
    PageLogo:{
        width: 200,
        height: 200,
        top: 10,
    },
    PageTitle: {
        fontSize:25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colour.brand,
        padding: 10,
    },
    SubTitle:{
        fontSize: 18,
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: Colour.tertiary
    },
    ExtraView:{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    ExtraText:{
        justifyContent: 'center',
        alignContent: 'center',
        color: Colour.tertiary,
        fontSize: 15,
    },
    TextLink:{
        justifyContent: 'center',
        alignContent: 'center',
    },
    TextLinkContent:{
        color: Colour.brand,
        fontSize: 15,
    },
    Container: {
        backgroundColor:Colour.secondary,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    Icon:{
        marginRight: 10,
    },
    InputText:{
        flex: 1,
        color: Colour.tertiary,
        fontSize: 18
    },
 
    
})
export default styles