import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '../screens/Register'
import LoginForgetPassword from '../screens/LoginForgetPassword'
import RegisterCandidate from '../screens/RegisterCandidate'
import CandidatePaginationPartOne from '../screens/CandidatePaginationPartOne';
import CandidatePaginationPartTwo from '../screens/CandidatePaginationPartTwo';
import CandidatePaginationPartThree from '../screens/CandidatePaginationPartThree';
import CreateProfileRecruiter from '../screens/CreateProfileRecruiter';
import { LOGINUSER, REGISTERUSER, FORGETPASSWORD, REGISTERCANDIDATE, REGISTERECRUITER, CANDIDATEPAGINATIONONE, CANDIDATEPAGINATIONTWO, CANDIDATEPAGINATIONTHREE } from "../constants/routeName";
import Login from "../screens/Login";

export default function AuthNavigator() {

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <AuthStack.Screen name={LOGIN} component={Login} /> */}
            <AuthStack.Screen name={LOGINUSER} component={Login} />
            <AuthStack.Screen name={CANDIDATEPAGINATIONTWO} component={CandidatePaginationPartTwo} />
            <AuthStack.Screen name={CANDIDATEPAGINATIONONE} component={CandidatePaginationPartOne} />
            <AuthStack.Screen name={REGISTERUSER} component={Register} />
            <AuthStack.Screen name={FORGETPASSWORD} component={LoginForgetPassword} />
            <AuthStack.Screen name={REGISTERCANDIDATE} component={RegisterCandidate} />
            <AuthStack.Screen name={CANDIDATEPAGINATIONTHREE} component={CandidatePaginationPartThree} />
            <AuthStack.Screen name={REGISTERECRUITER} component={CreateProfileRecruiter} />
        </AuthStack.Navigator>
    );

}; 
