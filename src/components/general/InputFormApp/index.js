import { Text, View, TextInput } from "react-native";
import React, { TextField } from "react";
import styles from './StyleInputForm'
const InputFormApp = ({
    StyleViewContainerInputForm,
    StyleInputForm,
    PlaceholderForm,
    LabelInput,
    MultiLine = false,
    NumberOfLines,
    ValueInputForm,
    OnchangeText,
    SecureTextEntry = false,
}) => {

    return (

        <View style={StyleViewContainerInputForm}>
            {LabelInput}
            <TextInput
                style={[styles.textInput, StyleInputForm]}
                placeholder={PlaceholderForm}
                multiline={MultiLine}
                numberOfLines={NumberOfLines}
                onChangeText={OnchangeText}
                secureTextEntry={SecureTextEntry}
                onchangeText={OnchangeText}
                value={ValueInputForm}
            />
        </View>

    );

};

export default InputFormApp;
