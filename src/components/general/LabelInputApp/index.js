import { Text, View } from "react-native";
import React from "react";
import styles from "./StyleLabelInput";

const LabelInputApp = ({ StyleViewInputLabel, StyleInputLabel, ContentLabel }) => {

    return (
        <View style={StyleViewInputLabel}>
            <Text style={StyleInputLabel}>{ContentLabel}</Text>
        </View>
    );

};

export default LabelInputApp;
