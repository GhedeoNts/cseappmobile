import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./stylesHerosLoginConnexion";

const HerosForApp = ({ imgSource }) => {
    return (
        <View style={styles.containerimg}>
            <Image
                style={styles.imghero}
                source={imgSource}
            />
        </View>
    );
};

export default HerosForApp;

