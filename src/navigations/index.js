import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";
import ScreenCandidatePaginationPartOne from "../screens/ScreenCandidatePaginationPartOne";
import ScreenAboutCandidate from "../screens/ScreenAboutCandidate";
import ScreenEditPassword from "../screens/ScreenEditPassword";

export default function AppNavContainer() {

    return (
        <NavigationContainer>
            {/* <HomeNavigator /> */}
            <DrawerNavigator />
        </NavigationContainer>
    );

};
