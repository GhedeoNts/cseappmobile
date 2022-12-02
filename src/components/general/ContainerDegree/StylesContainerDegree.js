import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    stylesViewContainer: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderRadius: 9,
        width: 300,
        height: 50,
        marginTop: 19,

    },

    // stylesViewContainerNoDegree: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignSelf: "center",
    //     borderWidth: 0.5,
    //     borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    //     borderRadius: 9,
    //     height: 50,
    //     marginTop: 62,
    // },

    stylesViewContainerOtherDegree: {

        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "flex-start",
        width: 300,
        marginTop: 19,
    },

    stylesViewContainerOther: {

        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "flex-start",
        width: 300,
        height: 50,
        marginTop: 19,
    },

    stylesViewContainerInput: {

        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "flex-start",
        width: 300,
        height: 58,
        marginTop: 6,
    },

    stylesInputForm: {
        width: 299,
        height: 58,
        textAlign: "left",
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderRadius: 9,
        color: '#D9D9D9',
        paddingLeft: 6,
        fontWeight: '400',
        fontSize: 11,
        fontWeight: '21',
    },

    stylesViewContainerDegree: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: generalStylesApp.ColorFromApp.SECOND_COLOR,
        height: 30,
    },

    sectionCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        // marginLeft: 6,

    },

    styleCheckbox: {
        marginLeft: 6,
    },

    styleViewContainerTextCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 6,
    },

    styleTextCheckBox: {
        color: '#152536',
    },

    stylesViewContainerStatusDegree: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 6,
    },

    styleViewSubTitleDegreeAndSectionMyAvailabilities: {
        backgroundColor: '#CED4DA',
        flexDirection: "row",
        marginTop: 50,
        marginBottom: 24,
        width: 162,
        height: 28,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    styleSubTitleDegreeAndSectionMyAvailabilities: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        height: 27,
        color: 'rgba(0, 49, 71, 0.5)',
        fontWeight: '600',
        fontSize: 14,
        fontStyle: "normal",
        lineHeight: 21,
    },

    stylesContainerSubTitle: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
    },




});

export default styles;
