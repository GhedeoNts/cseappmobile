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

    styleViewContainer: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 80,
        marginBottom: 53,
        marginLeft: 36,
        marginRight: 36,
        width: 320,
        height: 91,
        backgroundColor: '#E0D1E7',
        borderWidth: 0.5,
        borderColor: '#A3CFBB',
        borderRadius: 8,
        shadowRadius: 'rgba(0, 0, 0, 0.25)',
    },

    // Style ContentMessageScreen

    styleContentMessageScreen: {
        color: '#0F5132',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'center',
    },

    // Style Component ButtonApp
    containerButtonApp: {
        marginTop: 60,
    },
    styleButton: {
        alignSelf: "center",
        width: 102,
        height: 50,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginTop: 33.35,
        marginBottom: 5,
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
        color: '#489FB9'
    }

});

export default styles;