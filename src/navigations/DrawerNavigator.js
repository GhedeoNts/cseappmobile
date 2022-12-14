import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CandidatePaginationPartOne from '../screens/CandidatePaginationPartOne';
import AboutCandidate from '../screens/AboutCandidate';
import ProfileCandidate from "../screens/ProfileCandidate";
import EditPassword from "../screens/EditPassword";
import { PROFILECANDIDATE, ABOUTUSER, CANDIDATEPAGINATIONONE, EDITPASSWORD } from "../constants/routeName";


export default function DrawerNavigator() {

    const DrawerStack = createDrawerNavigator();

    return (

        <DrawerStack.Navigator>
            <DrawerStack.Screen name={PROFILECANDIDATE} component={ProfileCandidate} />
            <DrawerStack.Screen name={ABOUTUSER} component={AboutCandidate} />
            <DrawerStack.Screen name={CANDIDATEPAGINATIONONE} component={CandidatePaginationPartOne} />
            <DrawerStack.Screen name={EDITPASSWORD} component={EditPassword} />
        </DrawerStack.Navigator>

    );

};
