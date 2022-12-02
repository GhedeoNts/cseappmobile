import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StringAppFr from "../../../resources/strings/fr-FR";

const FooterBar = () => {
    return (
        <View style={styles.containerFooter}>
            <View style={styles.viewContainerTextFooter}>
                <Text style={styles.styleTextFooter}>{StringAppFr.generalContent.footerTitle}</Text>
            </View>
        </View>
    );
};

export default FooterBar;

