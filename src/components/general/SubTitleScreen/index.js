import { Text, View } from "react-native";
import React from "react";

const SubTitleScreen = ({ StyleViewSubTitle, StyleViewParagraph, StyleSubTitle, StyleParagraph, ContentSubTitle, ContentParagraph }) => {
    return (
        <>
            <View style={StyleViewSubTitle}>
                <Text style={StyleSubTitle}>{ContentSubTitle}</Text>
            </View>
            <View style={StyleViewParagraph}>
                <Text style={StyleParagraph}>{ContentParagraph}</Text>
            </View>
        </>
    );
};

export default SubTitleScreen;
