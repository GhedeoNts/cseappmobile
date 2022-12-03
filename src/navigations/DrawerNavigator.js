import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ScreenCandidatePaginationPartOne from '../screens/ScreenCandidatePaginationPartOne';
import ScreenAboutCandidate from '../screens/ScreenAboutCandidate';
import ScreenProfileCandidate from "../screens/ScreenProfileCandidate";
import ScreenEditPassword from "../screens/ScreenEditPassword";
import { PROFILECANDIDATE, ABOUTUSER, CANDIDATEPAGINATIONONE, EDITPASSWORD } from "../constants/routeName";


export default function DrawerNavigator() {

    const DrawerStack = createDrawerNavigator();

    return (

        <DrawerStack.Navigator>
            <DrawerStack.Screen name={PROFILECANDIDATE} component={ScreenProfileCandidate} />
            <DrawerStack.Screen name={ABOUTUSER} component={ScreenAboutCandidate} />
            <DrawerStack.Screen name={CANDIDATEPAGINATIONONE} component={ScreenCandidatePaginationPartOne} />
            <DrawerStack.Screen name={EDITPASSWORD} component={ScreenEditPassword} />
        </DrawerStack.Navigator>

    );

};
