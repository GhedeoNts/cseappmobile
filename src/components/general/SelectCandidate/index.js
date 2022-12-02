import { StyleSheet, Text, View, Image, Switch } from "react-native";
import React, { useState } from "react";
import styles from './StyleSelectCandidate'
import ImgForApp from "../../../utils/ImgApp";
import generalStylesApp from "../../../styles/generalStylesApp";

const SelectCandidate = ({ StyleViewContainer, StyleNameCandidate, FullNameContent, ImgSourceCandidate }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

        <View style={StyleViewContainer}>

            <View style={styles.styleViewImgCandidate}>
                <Image
                    style={styles.styleImgCandidate}
                    source={ImgSourceCandidate}
                />
            </View>

            <View style={styles.styleViewNameCandidate}>
                <Text style={StyleNameCandidate}>{FullNameContent}</Text>
            </View>

            <View style={styles.styleViewSwitchButton}>
                <Switch
                    style={styles.styleSwitchButton}
                    trackColor={{ false: generalStylesApp.ColorFromApp.PRIMARY_COLOR, true: generalStylesApp.ColorFromApp.SECOND_COLOR }}
                    thumbColor={isEnabled ? generalStylesApp.ColorFromApp.PRIMARY_COLOR : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

        </View>

    );

};

export default SelectCandidate;
