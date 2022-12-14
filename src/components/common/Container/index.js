import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";


export default function Container({ style, children }) {

    return (
        <SafeAreaView style={[styles.wrapper, style]}>
            <ScrollView style={styles.scrollView}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
