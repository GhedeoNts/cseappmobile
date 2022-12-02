import { TouchableHighlight, View, Text } from "react-native";
import React from "react";

const ButtonApp = ({ styleButton, styleTitle, titleButton, ActiveOpacity, UnderlayColor, OnPressButton }) => {

    return (
        <View>
            <TouchableHighlight
                style={styleButton}
                activeOpacity={ActiveOpacity}
                underlayColor={UnderlayColor}
                onPress={OnPressButton}
            >
                <Text style={styleTitle}>{titleButton}</Text>
            </TouchableHighlight>
        </View>
    );

};

export default ButtonApp;
