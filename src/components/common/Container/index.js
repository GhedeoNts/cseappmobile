import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const { wrapper, scrollView } = styles;

export default function container({ children }) {

    return (
        <SafeAreaView style={wrapper}>
            <ScrollView style={scrollView}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
