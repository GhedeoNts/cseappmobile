import { StyleSheet, StatusBar } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    scrollView: {
        backgroundColor: generalStylesApp.ColorFromApp.SECOND_COLOR,
        marginHorizontal: 2,
    },

    // Style Component SubTitleScreen
    styleViewSubTitle: {
        marginTop: 50,
        alignSelf: "center",
    },


    styleSubTitle: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 24,
        textAlign: "center",
        fontFamily: 'normal',
    },

    containerform: {
        flex: 1,
        alignSelf: "center",
        paddingVertical: 12,
    },

    // Style Component LabelInputAppMail
    styleViewInputLabelMail: {
        width: 85,
        height: 16,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 236,
    },
    styleInputLabelMail: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component LabelInputAppPassword
    styleViewInputLabelPassword: {
        width: 85,
        height: 16,
        // marginTop: 14,
        marginLeft: 50,
        marginRight: 236,
    },
    styleInputLabelPassword: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
    },

    // Style Component LabelInputAppPassword
    styleViewInputLabelPasswordConfirmation: {
        width: 180,
        height: 18,
        // marginTop: 14,
        marginLeft: 50,
        marginRight: 136,
    },
    styleInputLabelPasswordConfirmation: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 70,
        textAlignVertical: "center",
    },

    // Style Component InputFormApp
    styleViewContainerInputForm: {
        alignSelf: "center",
        width: 270,
        // alignItems: "center",
    },
    styleInputForm: {
        marginTop: 14,
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
        backgroundColor: '#7050D5',
        marginTop: 23.35,
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
        color: '#6050D5'
    }

});

export default styles;
