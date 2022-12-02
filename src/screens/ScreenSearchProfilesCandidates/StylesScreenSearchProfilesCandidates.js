import { StyleSheet, StatusBar, View } from "react-native";
import generalStylesApp from "../../styles/generalStylesApp";
generalStylesApp

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

    // Style Component ButtonApp
    containerButtonApp: {
        marginTop: 67,
    },
    styleButton: {
        alignSelf: "center",
        width: 221,
        height: 50,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
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
        color: '#489FB9'
    }



});

export default styles;

