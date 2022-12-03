import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

const ButtonApp = ({ styleButton, styleTitle, titleButton, ActiveOpacity, UnderlayColor, OnPressButton, children }) => {

    return (
        <View>
            <TouchableOpacity
                style={styleButton}
                activeOpacity={ActiveOpacity}
                underlayColor={UnderlayColor}
                onPress={OnPressButton}
            >
                {children ? children : <Text style={styleTitle}>{titleButton}</Text>}
            </TouchableOpacity>
        </View>
    );

};

export default ButtonApp;
