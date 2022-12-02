import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    styleViewContainer: {
        backgroundColor: '#DEE2E6',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        width: 303,
        height: 50,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    styleViewImgCandidate: {
        width: 70,
        height: 70,
    },
    styleImgCandidate: {
        width: 70,
        height: 70,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 4,
        borderRadius: 50,
    },

    styleViewNameCandidate: {
        alignItems: "center",
        justifyContent: "center",
        width: 130,
        height: 19,
    },
    styleNameCandidate: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 17,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: "normal",
    },

    styleViewSwitchButton: {
        width: 39,
        height: 25,
        justifyContent: "center",
        marginTop: 12,
        marginBottom: 12,
        marginRight: 12,
    },
    styleSwitchButton: {
        alignSelf: "center",
    },

});

export default styles