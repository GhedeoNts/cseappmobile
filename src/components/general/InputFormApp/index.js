import { Text, View, TextInput } from "react-native";
import React, { TextField } from "react";

const InputFormApp = ({
    StyleViewContainerInputForm,
    StyleInputForm,
    PlaceholderForm,
    LabelInput,
    MultiLine = false,
    NumberOfLines,
    ValueInputForm,
    OnchangeText,
    SecureTextEntry = false
}) => {

    return (

        <View style={StyleViewContainerInputForm}>
            {LabelInput}
            <TextInput
                style={StyleInputForm}
                placeholder={PlaceholderForm}
                multiline={MultiLine}
                numberOfLines={NumberOfLines}
                onChangeText={OnchangeText}
                value={ValueInputForm}
                secureTextEntry={SecureTextEntry}
            />
        </View>

    );

};

export default InputFormApp;
