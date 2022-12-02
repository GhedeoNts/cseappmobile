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

    containerChoiceActionProfileRecruiter: {
        marginTop: 20,
        alignSelf: "center"
    },

    styleViewImgChoiceActionProfileRecruiter: {
        width: 122,
        height: 158,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleImgChoiceActionProfileRecruiter: {
        width: 122,
        height: 122,
        borderRadius: 9,
    },

    styleViewContainerTitleActionProfileRecruiter: {
        marginTop: 5,
        width: 200,
        height: 21,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleTitleActionProfileRecruiter: {
        alignSelf: "center",
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
    }


});

export default styles;
