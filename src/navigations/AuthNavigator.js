import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from '../screens/ScreenLogin'
import ScreenRegister from '../screens/ScreenRegister'
import ScreenLoginForgetPassword from '../screens/ScreenLoginForgetPassword'

export default function AuthNavigator() {

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="ScreenLogin" component={ScreenLogin} />
            <AuthStack.Screen name="ScreenRegister" component={ScreenRegister} />
            <AuthStack.Screen name="ScreenLoginForgetPassword" component={ScreenLoginForgetPassword} />
        </AuthStack.Navigator>
    );

};
