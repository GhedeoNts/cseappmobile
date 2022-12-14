import { StyleSheet } from "react-native";
import generalStylesApp from "../../styles/generalStylesApp";

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#fff',
    },

    containerScreenChoiceProfile: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    viewContainerChoiceProfile: {
        marginTop: 20,
    },

    viewSubTitleStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 30,
    },

    subTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
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
        justifyContent: "flex-end",
    },

    ContainerimgChoiceProfile: {
        width: 122,
        height: 158,
        alignSelf: "center",
        justifyContent: "center",
    },

    imgChoiceProfile: {
        width: 122,
        height: 122,
        borderRadius: 9,
    },

    viewContainerTitleProfile: {
        marginTop: 15,
        width: 62,
        height: 21,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleTitleProfile: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
    }

});

export default styles