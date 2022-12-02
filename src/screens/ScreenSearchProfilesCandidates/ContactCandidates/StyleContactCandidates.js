import { StyleSheet, StatusBar } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    styleScrollView: {
        marginHorizontal: 1,
    },


    styleViewSubTitle: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    styleSubTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    styleViewContainerParagraph: {
        alignSelf: "center",
        marginTop: 15,
        width: 280,
        height: 34,
    },

    StyleContentParagraph: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 28,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,

    },

    styleContainerForm: {
        alignSelf: "center",
        marginTop: 32,
        width: 310,
    },

    styleViewInputLabel: {
        width: 140,
        height: 13.75,
        marginBottom: 2.25,
    },
    styleInputLabel: {
        fontSize: 13,
        fontWeight: '400',
        fontStyle: "normal",
        lineHeight: 12,
        color: 'rgba(0, 49, 71, 0.7)',
    },

    // InputFormNameAndFirstName
    styleContainerInputFormNameAndFirstName: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18,
        flexDirection: "row",
        width: 309,
        height: 28,
    },

    styleViewContainerInputFormNameAndFirstName: {
        marginTop: 3.17,
    },

    styleInputFormNameAndFirstName: {
        fontSize: 12,
        width: 140,
        height: 28,
        paddingLeft: 3.5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CED4DA',
    },

    // StyleContainerInputForm
    styleContainerInputForm: {
        marginTop: 10,
    },
    styleViewContainerInputForm: {
        marginTop: 3.08,
    },
    styleInputForm: {
        fontSize: 12,
        width: 309,
        height: 28,
        paddingLeft: 3.5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CED4DA',
    },

    styleContainerInputFormDisplaysSelectedCandidates: {
        flexDirection: "row",
        alignSelf: "center",
    },

    // Style Component SelectCandidateSendMessage 1
    styleViewContent1: {
        marginTop: 22,
        justifyContent: "center",
        alignItems: "center",
        width: 83,
        height: 18,
        backgroundColor: '#FFEEBA',
        borderColor: '#DEE2E6',
        borderWidth: 0.8,
        borderLeftWidth: 0.8,
        borderRightWidth: 2,
    },

    styleContent1: {
        color: '#856404',
        textTransform: "capitalize",
        fontSize: 9,
        fontStyle: "normal",
        fontWeight: '400',
        lineHeight: 13,
    },

    // Style Component SelectCandidateSendMessage 2
    styleViewContent2: {
        marginTop: 22,
        justifyContent: "center",
        alignItems: "center",
        width: 83,
        height: 18,
        backgroundColor: '#C3E6CB',
        borderColor: '#DEE2E6',
        borderWidth: 0.8,
        borderLeftWidth: 0.8,
        borderRightWidth: 2,
    },

    styleContent2: {
        color: '#155724',
        textTransform: "capitalize",
        fontSize: 9,
        fontStyle: "normal",
        fontWeight: '400',
        lineHeight: 13,
    },

    // Style Component SelectCandidateSendMessage 3
    styleViewContent3: {
        marginTop: 22,
        justifyContent: "center",
        alignItems: "center",
        width: 83,
        height: 18,
        backgroundColor: '#F5C6CB',
        borderColor: '#DEE2E6',
        borderWidth: 0.8,
        borderLeftWidth: 0.8,
        borderRightWidth: 2,
    },

    styleContent3: {
        color: '#721C24',
        textTransform: "capitalize",
        fontSize: 9,
        fontStyle: "normal",
        fontWeight: '400',
        lineHeight: 13,
    },

    // Style InputTextArea
    styleInputFormTextArea: {
        paddingTop: 6.09,
        paddingLeft: 7.42,
        paddingRight: 7.42,
        fontSize: 10,
        fontWeight: '200',
        lineHeight: 19,
        fontStyle: "italic",
        textAlign: "justify",
        width: 309,
        height: 121,
        borderColor: '#ABB5BE',
        borderRadius: 4,
        borderWidth: 1,
    },

    // Style Component ButtonApp
    containerButtonApp: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 25,
    },
    stylesButtonContact: {
        alignSelf: "center",
        width: 140,
        height: 34,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginTop: 25,
        marginBottom: 35,
        // margin: 18,
        justifyContent: 'center'
    },

    stylesButtonBack: {
        alignSelf: "center",
        width: 140,
        height: 34,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginTop: 25,
        marginBottom: 35,
        marginLeft: 18,
        justifyContent: 'center'
    },
    stylesTitle: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        fontWeight: '700',
        color: generalStylesApp.ColorFromApp.SECOND_COLOR,
        fontStyle: 'normal',
    },

    underLayColor: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    }



});

export default styles;

