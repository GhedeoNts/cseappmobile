import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    containerFooter: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        backgroundColor: generalStylesApp.ColorFooterApp.FooterBackgroundColor,
    },

    viewContainerTextFooter: {
        width: 212,
        height: 24,
        marginTop: 16,
        marginBottom: 15,
    },

    styleTextFooter: {
        color: generalStylesApp.ColorFooterApp.colorTitleFooter,
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 24,
    }


});

export default styles