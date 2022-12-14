import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from './StyleInputForm'
import colors from "../../../assets/theme/colors";

const InputFormApp = ({
    StyleViewContainerInputForm,
    StyleInput,
    PlaceholderForm,
    LabelInput,
    MultiLine = false,
    NumberOfLines,
    Value,
    OnchangeText,
    SecureTextEntry = false,
    icon,
    iconPosition,
    error,
    ...props
}) => {

    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {

        if (icon && iconPosition) {

            if (iconPosition === 'left') {
                return 'row';
            }
            else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    };

    const getBorderColor = () => {
        if (error) {
            return colors.danger;
        }

        if (focused) {
            return colors.primary;
        } else {
            return colors.grey;
        }
    };

    return (

        <View style={styles.inputContainer}>

            {LabelInput}

            <View
                style={[
                    styles.wrapper,
                    { alignItems: icon ? 'center' : 'baseline' },
                    {
                        borderColor: getBorderColor(),
                        flexDirection: getFlexDirection()
                    }, StyleViewContainerInputForm
                ]}>

                <View>{icon && icon}</View>

                <TextInput
                    style={[styles.textInput, StyleInput]}
                    placeholder={PlaceholderForm}
                    multiline={MultiLine}
                    numberOfLines={NumberOfLines}
                    onChangeText={OnchangeText}
                    secureTextEntry={SecureTextEntry}
                    onchangeText={OnchangeText}
                    value={Value}
                    onFocus={() => {
                        setFocused(true)
                    }}
                    onBlur={() => {
                        setFocused(false)
                    }}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}

        </View>

    );

};

export default InputFormApp;
