import { Text, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./StyleChoiceProfileCreation";
import ButtonApp from "../ButtonApp";

const ChoiceProfileCreation = ({ StyleViewContainerImgChoiceProfile, StyleImgChoiceProfile, StyleViewContainerTitleProfile, StyleChoiceTitleProfile, ImgSourceProfileChoice, TitleChoiceProfile }) => {
    return (
        <View style={styles.viewContainerChoiceProfile}>
            <View style={StyleViewContainerImgChoiceProfile}>

                <Image
                    style={StyleImgChoiceProfile}
                    source={ImgSourceProfileChoice}
                />

            </View>
            <View style={StyleViewContainerTitleProfile}>
                <Text style={StyleChoiceTitleProfile}>{TitleChoiceProfile}</Text>
            </View>
        </View>
    );
};

export default ChoiceProfileCreation;
