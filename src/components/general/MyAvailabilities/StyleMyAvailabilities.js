import { StyleSheet, Text, View } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";


const styles = StyleSheet.create({

    formCreateCandidate: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        marginTop: 20,
    },

    styleViewInputLabel: {
        marginTop: 19,
    },

    StyleInputLabel: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginLeft: 6,
        marginBottom: 2,
    },

    styleContainerInputFormChoiceProfil: {
        alignSelf: "center",
    },

    styleInputFormChoiceProfil: {
        opacity: 70,
        width: 248,
        height: 38,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    },

    styleContainerInput: {
        flex: 1,
        flexDirection: "column",

    },

    stylesViewInput: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
    },

    styleInputForm: {
        opacity: 70,
        width: 145,
        height: 34,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginRight: 6,
        marginLeft: 6,
    },

    stylesViewInputFormCodePostalAndCity: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
    },

    styleInputFormCodePostal: {

        opacity: 70,
        width: 110,
        height: 34,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginRight: 6,
        marginLeft: 6,
    },

    styleInputFormCity: {
        opacity: 70,
        width: 180,
        height: 34,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginRight: 6,
        marginLeft: 6,
    },

    styleInputFormAddressAndUploadFile: {
        opacity: 70,
        width: 300,
        height: 34,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginRight: 6,
        marginLeft: 6,
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


    styleViewSubTitleSectionMyAvailabilities: {
        backgroundColor: '#CED4DA',
        flexDirection: "row",
        marginTop: 25,
        marginBottom: 24,
        width: 195,
        height: 28,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    styleSubTitleSectionMyAvailabilities: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        height: 27,
        color: 'rgba(0, 49, 71, 0.5)',
        fontWeight: '600',
        fontSize: 12,
        fontStyle: "normal",
        lineHeight: 21,
    },


    styleViewSubTitleSubSectionDayOfTheWeek: {
        backgroundColor: '#fff',
        flexDirection: "row",
        marginTop: 12,
        marginBottom: 16,
        width: 299,
        height: 30,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        borderWidth: 0.3,
        borderColor: '#ABB5BE',
    },

    styleSubTitleSubSectionDayOfTheWeek: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: '#ABB5BE',
        fontWeight: '600',
        fontSize: 14,
        fontStyle: "normal",
        lineHeight: 21,
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
});

export default styles