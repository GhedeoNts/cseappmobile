import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import HomeNavigator from "./HomeNavigator";
import ScreenCandidatePaginationPartOne from '../screens/ScreenCandidatePaginationPartOne';
import ScreenAboutCandidate from '../screens/ScreenAboutCandidate';
import ScreenProfileCandidate from "../screens/ScreenProfileCandidate";
import ScreenEditPassword from "../screens/ScreenEditPassword";


export default function DrawerNavigator() {

    const DrawerStack = createDrawerNavigator();

    return (

        <DrawerStack.Navigator>
            <DrawerStack.Screen name="Profile candidat" component={ScreenProfileCandidate} />
            <DrawerStack.Screen name="A propos" component={ScreenAboutCandidate} />
            <DrawerStack.Screen name="Modifier votre profil" component={ScreenCandidatePaginationPartOne} />
            <DrawerStack.Screen name="Modifier mdp" component={ScreenEditPassword} />
        </DrawerStack.Navigator>

    );

};
