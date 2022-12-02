import { View, Image } from "react-native";
import styles from "./stylesNavBar";
import React from "react";
import ImgForApp from "../../../utils/ImgApp";

const NavBarApp = ({ ImgSourceIcon }) => {

    return (

        <View style={styles.viewNavBar}>

            <View style={styles.containerIconCAB}>
                <Image
                    source={ImgForApp.iconNavBar.imgIconCAB}
                    style={styles.imgIconCAB}
                />
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

