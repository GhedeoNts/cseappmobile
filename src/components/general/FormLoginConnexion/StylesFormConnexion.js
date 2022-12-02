import { StyleSheet } from "react-native";
import generalStylesApp from "../../styles/generalStylesApp";

const styles = StyleSheet.create({

    containerform: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: '#fff'
    },

    viewSubTitleStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    subTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    viewContainerInputMail: {
        marginTop: 70,

    },

    viewContainerInputPassword: {
        marginTop: 35,

    },

    styleinputLabel: {
        marginBottom: 14,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        opacity: 70,

    },

    styleInputMail: {
        width: 270,
        height: 38,
        borderWidth: 1,
        borderColor: '#B7B2CA',
        borderRadius: 4,
        textAlign: "center",
        fontSize: 16,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        opacity: 85,
        fontWeight: "700",
        fontStyle: "normal",
    },

    styleInputPassword: {
        width: 270,
        height: 38,
        borderWidth: 1,
        borderColor: '#B7B2CA',
        borderRadius: 4,
        textAlign: "center",
        fontSize: 16,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        opacity: 85,
        fontWeight: "700",
        fontStyle: "normal",
    },

    viewContainerTitleForgetPassword: {
        width: 125,
        height: 15,
        marginLeft: 206,
        marginTop: 38,
        marginBottom: 31,
        marginRight: 38,
    },

    styletitleForgotPassword: {
        fontSize: 12,
        fontWeight: '400',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    },

    viewContainerButtonConnexion: {
        marginTop: 18,
    },

    styleButtonConnexion: {
        backgroundColor: generalStylesApp.ColorButton.ButtonConnexion,
        width: 110,
        height: 55,
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
    },

    styleTitleButtonConnexion: {
        color: generalStylesApp.ColorButton.titleButtonConnexion,
        textAlign: "center",
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.36,
    },

    viewContainerButtonRegister: {
        marginTop: 24,
        marginBottom: 15,
    },

    styleButtonRegister: {

        backgroundColor: generalStylesApp.ColorButton.ButtonRegister
    },

    styleTitleButtonRegister: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '700',
        color: generalStylesApp.ColorButton.titleButtonRegister
    }
});

export default styles
