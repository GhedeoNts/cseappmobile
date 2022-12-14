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

    ViewContainer: {
        marginTop: 27,
        alignSelf: "center",
    },
    styleViewImgProfileAndNameCandidate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 390,
    },

    ViewAvatarProfileCandidate: {
        marginLeft: 30,
    },

    styleAvatarProfileCandidate: {
        width: 70,
        height: 70,
    },
    styleViewProfileName: {
        marginRight: 40,
    },
    styleProfileName: {
        fontSize: 32,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 17,
        textAlign: "center",
        alignItems: 'center',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR
    },

    styleViewInfoCandidate: {
        marginTop: 27,
        alignSelf: "center",
    },

    styleInfoProfileCandidate: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR
    },
    styleViewTitleDegree: {
        marginTop: 20,
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 7,
        borderWidth: 0.5,
        width: 116.66,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR

    },

    styleTitleDegree: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '400',
        fontStyle: "normal",
        lineHeight: 12,
        opacity: 60,
    },

    styleViewBodyDegree: {
        marginTop: 30,
        width: 290,
        height: 15,
        alignSelf: "center",
        alignItems: "flex-start",
        justifyContent: "center"
    },

    styleBodyDegree: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 10,
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginBottom: 5,
    },

    styleViewTitleAvailableWeekdays: {
        marginTop: 20,
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 7,
        borderWidth: 0.5,
        width: 234,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR

    },
    styleTitleAvailableWeekdays: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '400',
        fontStyle: "normal",
        lineHeight: 12,
        opacity: 60,

    },

    styleViewBodyDegreeAndAvailableDuringTheHolidaysOf: {
        alignSelf: "center",
        width: 299,
        height: 45,
        marginTop: 15,
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


    // Style Component ButtonApp
    containerButtonApp: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 67,
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

