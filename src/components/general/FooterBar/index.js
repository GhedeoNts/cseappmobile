import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StringAppFr from "../../../resources/strings/fr-FR";

const { containerFooter, viewContainerTextFooter, styleTextFooter } = styles

const FooterBar = () => {
    return (
        <View style={containerFooter}>
            <View style={viewContainerTextFooter}>
                <Text style={styleTextFooter}>{StringAppFr.generalContent.footerTitle}</Text>
            </View>
        </View>
    );
};

export default FooterBar;
