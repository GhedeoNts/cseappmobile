import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoCab from "../../components/LogoCab";
import styles from './StyleScreenLoadingApp'
const { body } = styles;

export default function ScreenLoadingApp() {
    return (
        <View style={body}>
            <LogoCab />
        </View>
    );
};
