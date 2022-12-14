import { StyleSheet, StatusBar, View } from "react-native";
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
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    styleViewContainerParagraph: {
        alignSelf: "center",
        marginTop: 20,
        width: 246,
        height: 34,
    },

    style: {

    },

    styleContainerParagraph: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: 17,
        fontWeight: '400',
        textAlign: "center",

    },

    styleViewButtonFilter: {
        marginTop: 10,
        alignSelf: "center",
        // flexDirection: "row",
        alignItems: "flex-end",
        width: 300,
    },

    styleButtonFilter: {
        alignSelf: "flex-end",
        width: 150,
        height: 29,
    },

    styleViewComponentSelectCandidate: {
        marginTop: 30,
        marginBottom: 50,
    },

    styleComponentSelectCandidate: {
        marginTop: 15,
        marginBottom: 15,
    },

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


    styleViewContainerWithColor: {
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
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

    styleNameCandidate: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 17,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: "normal",
    },

    styleNameCandidateWithColor: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 17,
        color: generalStylesApp.ColorFromApp.SECOND_COLOR,
        fontStyle: "normal",
    },
    // Style Component ButtonApp
    containerButtonApp: {
        marginTop: 67,
    },
    styleButton: {
        alignSelf: "center",
        width: 221,
        height: 50,
        borderRadius: 9,
        backgroundColor: '#27167D',
        marginTop: 33.35,
        marginBottom: 35,
        justifyContent: 'center'
    },
    styleTitle: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        fontWeight: '700',
        color: generalStylesApp.ColorFromApp.SECOND_COLOR,
        fontStyle: 'normal',
    },

    underLayColor: {
        color: '#27167D',
    }



});

export default styles;

