import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../../../assets/theme/colors";
import styles from './StylesButton'

const ButtonApp = ({
    styleButton,
    styleTitle,
    titleButton,
    primary,
    secondary,
    danger,
    Disabled = false,
    Loading,
    ActiveOpacity,
    UnderlayColor,
    OnPressButton,
    children,
}) => {

    const getBgColor = () => {

        if (Disabled) {
            return colors.grey
        }
        if (primary) {
            return colors.primary;
        }

        if (danger) {
            return colors.danger;
        }

        if (secondary) {
            return colors.secondary;
        }
    }

    return (
        <TouchableOpacity
            style={[styles.ButtonContainer, { backgroundColor: getBgColor() }, styleButton]}
            disabled={Disabled}
            loading={Loading}
            activeOpacity={ActiveOpacity}
            underlayColor={UnderlayColor}
            onPress={OnPressButton}
        >
            <View style={[styles.loaderSection]}>
                {Loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
                {titleButton && (<Text style={[styles.styleTitle, { color: Disabled ? colors.black : colors.white, paddingLeft: Loading ? 5 : 0 }, styleTitle]}>{titleButton}</Text>)}
            </View>

        </TouchableOpacity>
    );

};

export default ButtonApp;
