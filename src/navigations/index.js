import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../contexts/Provider";

export default function AppNavContainer() {

    const {
        authState: { isLoggedIn },
    } = useContext(GlobalContext);


    console.log('isLoggedIn :>> ', isLoggedIn);

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );

};
