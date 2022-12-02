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

    containerChoiceActionProfileCandidate: {
        marginTop: 20,
        alignSelf: "center"
    },

    styleViewimgChoiceActionProfileCandidate: {
        width: 122,
        height: 158,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleImgChoiceActionProfileCandidate: {
        width: 122,
        height: 122,
        borderRadius: 9,
    },

    styleViewContainerTitleActionProfileCandidate: {
        marginTop: 5,
        width: 130,
        height: 21,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleTitleActionProfileCandidate: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
    }


});

export default styles;
