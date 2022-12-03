import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenProfileCandidate from '../screens/ScreenProfileCandidate';
import ScreenCandidatePaginationPartOne from '../screens/ScreenCandidatePaginationPartOne';
import ScreenCandidatePaginationPartTwo from '../screens/ScreenCandidatePaginationPartTwo';
import ScreenCandidatePaginationPartThree from '../screens/ScreenCandidatePaginationPartThree';
import ScreenAboutCandidate from '../screens/ScreenAboutCandidate';
import { PROFILECANDIDATE, CANDIDATEPAGINATIONONE, CANDIDATEPAGINATIONTWO, CANDIDATEPAGINATIONTHREE, ABOUTUSER } from "../constants/routeName";

export default function HomeNavigator() {

    const HomeStack = createNativeStackNavigator();

    return (

        <HomeStack.Navigator initialRouteName={PROFILECANDIDATE}>
            <HomeStack.Screen name={PROFILECANDIDATE} component={ScreenProfileCandidate} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONONE} component={ScreenCandidatePaginationPartOne} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONTWO} component={ScreenCandidatePaginationPartTwo} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONTHREE} component={ScreenCandidatePaginationPartThree} />
            <HomeStack.Screen name={ABOUTUSER} component={ScreenAboutCandidate} />
        </HomeStack.Navigator>

    );

};
