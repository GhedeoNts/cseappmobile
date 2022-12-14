import { View, Image } from "react-native";
import styles from "./stylesNavBar";
import React from "react";
import ImgForApp from "../../../utils/ImgApp";
import TouchableButton from "../TouchableButton";

const NavBarApp = ({ ImgSourceIcon, Navigation }) => {

    return (

        <View style={styles.viewNavBar}>

            <View style={styles.containerIconCAB}>
                <TouchableButton OnPressButton={Navigation}>
                    <Image
                        source={ImgForApp.iconNavBar.imgIconCAB}
                        style={styles.imgIconCAB}
                    />
                </TouchableButton>
            </View>

            <View style={styles.containerIcon}>

                <View style={styles.viewlogoheader}>

                    <Image
                        source={ImgSourceIcon}
                        style={styles.imgIcon}
                    />

                </View>

            </View>

        </View>

    );
};

export default NavBarApp;

