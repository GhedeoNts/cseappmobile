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
        marginTop: 107,
        marginBottom: 53,
        marginLeft: 35,
        marginRight: 35,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 321,
        height: 91,
        backgroundColor: '#E0D1E7',
        borderWidth: 0.5,
        borderColor: '#A3CFBB',
        borderRadius: 8,
        shadowRadius: 'rgba(0, 0, 0, 0.25)',
    },

    // Style BodyTitle

    styleViewBodyTitle: {
        marginTop: 18,
    },

    styleBodyTitle: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        alignItems: 'center',
        textAlign: 'center',
    },

    // Style Component ButtonApp
    containerButtonApp: {
        marginTop: 67,
    },
    styleButton: {
        alignSelf: "center",
        width: 102,
        height: 50,
        borderRadius: 9,
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        marginTop: 33.35,
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
        color: '#489FB9'
    }

});

export default styles;