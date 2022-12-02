import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    styleViewContainer: {
        alignSelf: "center",
        marginTop: 41,
        marginBottom: 53,
        marginLeft: 14,
        marginRight: 14,
        flexDirection: "column",
        width: 363,
        height: 342,
        backgroundColor: '#D1E7DD',
        borderWidth: 0.5,
        borderColor: '#A3CFBB',
        borderRadius: 8,
        shadowRadius: 'rgba(0, 0, 0, 0.25)',
    },

    // Style HeaderTitle
    styleViewHeaderTitle: {
        marginTop: 28,
    },

    styleHeaderTitle: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: 28,
        alignItems: 'center',
        textAlign: 'center',
    },

    styleViewBodyTitle: {
        marginTop: 28,
    },

    styleBodyTitle: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: 28,
        alignItems: 'center',
        textAlign: 'center',
    },

    styleViewCurrentDate: {
        marginTop: 30,
    },

    styleCurrentDate: {
        fontSize: 16,
        textTransform: "capitalize",
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: 28,
        alignItems: 'center',
        textAlign: 'center',
    },

    styleViewFooterTitle: {
        marginTop: 70,
    },

    styleFooterTitle: {
        fontSize: 16,
        textTransform: "capitalize",
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: 28,
        alignItems: 'center',
        textAlign: 'center',
    },

});

export default styles;