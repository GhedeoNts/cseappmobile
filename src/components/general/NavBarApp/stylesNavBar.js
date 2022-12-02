import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    viewNavBar: {
        flexDirection: 'row',
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        alignSelf: "stretch",
        height: 55,
        // justifyContent: "space-around"
    },
    imgIconCAB: {
        width: 38,
        height: 38,
    },

    imgIcon: {
        width: 38,
        height: 38,
    },

    imgIconCandidat: {
        width: 38,
        height: 38,
    },
    imgIconRecruiter: {
        width: 38,
        height: 38,
    },
    containerIconCAB: {
        backgroundColor: '#fff',
        borderRadius: 4,
        alignSelf: "center",
        width: 38,
        height: 38,
        marginLeft: 40,
    },

    containerIcon: {
        flex: 1,
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: "flex-end",
    },

    viewlogoheader: {
        alignSelf: 'center',
        marginRight: 52,
        marginTop: 15,
        marginBottom: 15,
    }
    ,
    viewlogocandidatheader: {
        // alignSelf: 'center',
        marginRight: 15,
        marginTop: 14,
        marginBottom: 15,
        marginLeft: 52,
    },
    viewlogorecruteurheader: {
        alignSelf: 'center',
        marginRight: 17,
        marginTop: 14,
        marginBottom: 15,
    }


});

export default styles
