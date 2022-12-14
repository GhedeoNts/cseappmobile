import { TouchableOpacity, Text } from "react-native";
import React from "react";
import colors from "../../../assets/theme/colors";

const TouchableButton = ({
    styleButton,
    styleTitle,
    titleButton,
    Loading,
    ActiveOpacity,
    UnderlayColor,
    OnPressButton,
    Disabled = false,
    children,
}) => {
    return (

        <TouchableOpacity
            style={styleButton}
            loading={Loading}
            activeOpacity={ActiveOpacity}
            underlayColor={UnderlayColor}
            onPress={OnPressButton}
        >
            {children ? children : <Text style={[{ color: Disabled ? colors.black : colors.white }, styleTitle]}>{titleButton}</Text>}
        </TouchableOpacity>

    );
};

export default TouchableButton;
