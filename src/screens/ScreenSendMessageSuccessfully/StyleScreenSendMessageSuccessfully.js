import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: StatusBar.currentHeight,
    },
    ScrollView: {
        marginHorizontal: 1,
    },

    styleViewContainer: {
        marginTop: 42,
        alignSelf: "center",
        width: 311,
        height: 320,
        backgroundColor: '#A3CFBB',
        borderRadius: 8,
    },

    styleViewHeaderTitle: {
        marginTop: 46,
        alignSelf: "center",
    },
    styleHeaderTitle: {
        color: '#0F5132',
        fontStyle: "normal",
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
    },

    StyleViewBodyTitle: {
        marginTop: 46,
        alignSelf: "center",
        alignItems: "center",
    },

    StyleBodyTitle: {
        color: '#0F5132',
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        textAlign: "center",
    },

    styleViewFooterTitle: {
        marginTop: 36,
        alignSelf: "center",
        alignItems: "center",
    },

    StyleFooterTitle: {
        color: '#0F5132',
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        textAlign: "center",
    },


});

export default styles