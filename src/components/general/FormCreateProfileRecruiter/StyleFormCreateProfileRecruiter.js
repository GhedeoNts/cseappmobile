import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";


const styles = StyleSheet.create({

    formInputContainer: {
        flexDirection: "column",
        backgroundColor: 'pinky',
    },

    styleViewSubTitle: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    styleSubTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    // Style Component LabelInputAppMail
    styleViewInputLabelNameOfTheStucture: {
        width: 130,
        height: 16,
        marginTop: 36,
        marginLeft: 67,
        marginRight: 195,
    },
    styleInputLabelNameOfTheStucture: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component LabelInputAppAddress
    styleViewInputLabelAddress: {
        width: 85,
        height: 16,
        marginTop: 14,
        marginLeft: 67,
        marginRight: 236,
    },
    styleInputLabelAddress: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component InputFormApp
    styleViewContainerInputForm: {
        alignItems: "center",
    },

    styleInputForm: {
        marginTop: 14,
        width: 258,
        height: 38,
        borderRadius: 4,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.5,
        paddingLeft: 5
    },

    // Style Component ButtonApp
    styleButton: {
        alignSelf: "center",
        width: 102,
        height: 50,
        borderRadius: 9,
        backgroundColor: '#489FB9',
        marginTop: 33.35,
        marginBottom: 35,
        justifyContent: 'center'
    },
    styleTitle: {
        fontSize: 16,
        lineHeight: 19.36,
        textAlign: 'center',
        fontWeight: '700',
        color: generalStylesApp.ColorFromApp.SECOND_COLOR,
        fontStyle: 'normal',
    },

    underLayColor: {
        color: '#489FB9'
    },
    // -----------------------------------------------------------
    styleViewContainerPostalCodeAndCity: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around",
    },
    // Style Component LabelInputCodePostal
    styleContainerInputPostalCode: {
        flexDirection: "row",
        alignSelf: "center",
        marginRight: 6,
    },

    styleViewInputLabelPostalCode: {
        width: 85,
        height: 16,
        marginTop: 14,
    },

    styletyleInputLabelPostalCode: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component InputFormApp
    styleViewContainerInputFormPostalCode: {
        alignItems: "center",
    },

    styleInputFormPostalCode: {
        marginTop: 14,
        width: 90,
        height: 38,
        borderRadius: 4,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.5,
        paddingLeft: 5
    },
    // Style Component LabelInputCity
    styleContainerInputCity: {
        flexDirection: "row",
        alignSelf: "center",
    },

    styleViewInputLabelCity: {
        alignSelf: "flex-start",
        width: 85,
        height: 16,
        marginTop: 14,
    },

    styletyleInputLabelCity: {
        alignSelf: "flex-start",
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component InputFormApp

    styleViewContainerInputFormCity: {
        alignItems: "center",
    },

    styleInputFormCity: {
        marginTop: 14,
        width: 160,
        height: 38,
        borderRadius: 4,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.5,
        paddingLeft: 5
    },
});

export default styles;
