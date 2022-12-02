import { View, Image } from "react-native";
import React from "react";
import styles from "./StyleLogoCab";
import ImgForApp from "../../utils/ImgApp";

const LogoCAB = () => {
    return (
        <View style={styles.container}>
            <Image
                source={ImgForApp.imgLogoCAB}
                style={styles.imgLogoCabStyle}
            />
        </View>
    );
};

export default LogoCAB;
