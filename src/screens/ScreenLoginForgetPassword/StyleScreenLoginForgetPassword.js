import { StyleSheet, StatusBar } from "react-native";
import generalStylesApp from "../../styles/generalStylesApp";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
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

    StyleViewContainer: {
        marginTop: 39,
        alignSelf: "center"
    },

    styleViewContentMessageScreen: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        width: 197,
        height: 27,
        marginBottom: 6,
    },

    styleContentMessageScreen: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: "justify",
    },

    // Style InputForm And Label
    styleViewContainer: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        width: 300,
        height: 100,
        marginTop: 43,
    },

    styleViewInputLabel: {
        flexDirection: "row",
        marginTop: 5,
        width: 121,
        height: 21,
    },

    styleInputLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        opacity: 70,
    },

    styleViewContainerInputForm: {
        marginTop: 10,
    },

    styleInputForm: {
        marginTop: 6,
        width: 258,
        height: 38,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        paddingLeft: 5,

    },
    // Style Component ButtonApp
    containerButtonApp: {
        marginTop: 67,
    },
    styleButton: {
        alignSelf: "center",
        width: 102,
        height: 50,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
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
    }
});

export default styles;
