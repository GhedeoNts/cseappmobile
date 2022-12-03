import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from '../screens/ScreenLogin'
import ScreenRegister from '../screens/ScreenRegister'
import ScreenLoginForgetPassword from '../screens/ScreenLoginForgetPassword'
import { LOGIN, LOGINUSER, REGISTERUSER, FORGETPASSWORD } from "../constants/routeName";
import Login from "../screens/Login";

export default function AuthNavigator() {

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={LOGIN} component={Login} />
            {/* <AuthStack.Screen name={LOGINUSER} component={ScreenLogin} />
            <AuthStack.Screen name={REGISTERUSER} component={ScreenRegister} />
            <AuthStack.Screen name={FORGETPASSWORD} component={ScreenLoginForgetPassword} /> */}
        </AuthStack.Navigator>
    );

};
