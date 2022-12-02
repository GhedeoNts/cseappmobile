import { Text, View } from "react-native";
import React from "react";

const ContentScreenMessage = ({ StyleViewContainer, StyleViewHeaderTitle, StyleViewBodyTitle, StyleViewFooterTitle, StyleViewCurrentDate, StyleViewContentMessageScreen, StyleContentMessageScreen, StyleHeaderTitle, StyleBodyTitle, StyleFooterTitle, ContentHeaderTitle, ContentBodyTitle, ContentFooterTitle, StyleCurrentDate, CurrentDate, ContentMessageScreen }) => {
    return (
        <>
            <View style={StyleViewContainer}>
                <View style={StyleViewHeaderTitle}>
                    <Text style={StyleHeaderTitle}>{ContentHeaderTitle}</Text>
                </View>

                <View style={StyleViewBodyTitle}>
                    <Text style={StyleBodyTitle}>{ContentBodyTitle}</Text>
                </View>

                <View style={StyleViewCurrentDate}>
                    <Text style={StyleCurrentDate}>{CurrentDate}</Text>
                </View>

                <View style={StyleViewFooterTitle}>
                    <Text style={StyleFooterTitle}>{ContentFooterTitle}</Text>
                </View>
                <View style={StyleViewContentMessageScreen}>
                    <Text style={StyleContentMessageScreen}>{ContentMessageScreen}</Text>
                </View>
            </View>
        </>
    );
};

export default ContentScreenMessage;

