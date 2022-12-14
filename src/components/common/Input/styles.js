import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingHorizontal: 5,
        alignItems: 'center',
        marginTop: 5,
    },

    inputContainer: {
        paddingVertical: 12,
    },

    textInput: {
        flex: 1,
    },

    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
    },
});