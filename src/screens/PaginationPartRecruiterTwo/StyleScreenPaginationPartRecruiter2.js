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

    styleViewContentMessageScreen: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10,
    },

    styleContentMessageScreen: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(21, 37, 54, 0.75)',
        textAlign: 'center',
        lineHeight: 21,
        opacity: 75,
        fontStyle: "normal",
    },
});

export default styles;
