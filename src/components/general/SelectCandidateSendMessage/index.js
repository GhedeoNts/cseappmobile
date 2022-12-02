import { Text, View } from "react-native";
import React from "react";
import styles from "./StyleSelectCandidateSendMessage";

const SelectCandidateSendMessage = ({ StyleViewNameCandidate, StyleNameCandidate, NameCandidate }) => {

    return (

        <View style={StyleViewNameCandidate}>
            <Text style={StyleNameCandidate}>{NameCandidate} </Text>
        </View>
    );

};

export default SelectCandidateSendMessage;
