import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import React from "react";
import styles from "./StyleScreenLoadingApp";
import ImgForApp from '../../utils/ImgApp'

const { container, viewImgLogo, styleImgLogo } = styles;
const ScreenLoadingApp = () => {

    return (
        <View style={container}>

            <View style={viewImgLogo}>

                <Image
                    source={ImgForApp.imgLogoCAB}
                    style={styleImgLogo} />
            </View>

        </View>
    );

};

export default ScreenLoadingApp;
