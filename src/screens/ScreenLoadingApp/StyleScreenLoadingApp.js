import { StyleSheet } from "react-native";
import generalStylesApp from '../../styles/generalStylesApp'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    }
});

export default styles