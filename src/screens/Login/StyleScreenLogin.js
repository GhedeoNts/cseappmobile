import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../assets/theme/colors';
import generalStylesApp from '../../styles/generalStylesApp';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    StyleScrollView: {
        marginHorizontal: 0.1,
    },
    imgIconCAB: {
        width: 38,
        height: 38,
    },
    imgIcon: {
        width: 38,
        height: 38,
    },
    containerIcon: {
        flex: 1,
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: "flex-end"
    },
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
        marginBottom: 50,
    },

    subTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    viewContainerInputMail: {
        width: 270,
        height: 42,
        marginTop: 5,

    },

    viewContainerInputPassword: {
        width: 270,
        height: 42,
        marginTop: 5,

    },

    styleinputLabel: {
        marginBottom: 5,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        opacity: 70,
    },

    styleInputMail: {
        // textAlign: 'center',
        fontSize: 16,
        color: colors.primary,
        opacity: 85,
        fontWeight: "700",
        fontStyle: "normal",
    },

    styleInputPassword: {
        paddingLeft: 5,
        fontSize: 16,
        color: colors.primary,
        opacity: 85,
        fontWeight: "700",
        fontStyle: "normal",
    },

    viewContainerTitleForgetPassword: {
        width: 125,
        height: 15,
        marginLeft: 206,
        marginTop: 2,
        marginBottom: 31,
        marginRight: 38,
    },

    styletitleForgotPassword: {
        fontSize: 12,
        fontWeight: '400',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    },

    viewContainerButtonConnexion: {
        marginTop: 10,
    },

    styleButtonConnexion: {
        // backgroundColor: generalStylesApp.ColorButton.ButtonConnexion,
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