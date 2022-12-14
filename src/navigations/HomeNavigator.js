import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileCandidate from '../screens/ProfileCandidate';
import CandidatePaginationPartOne from '../screens/CandidatePaginationPartOne';
import CandidatePaginationPartTwo from '../screens/CandidatePaginationPartTwo';
import CandidatePaginationPartThree from '../screens/CandidatePaginationPartThree';
import AboutCandidate from '../screens/AboutCandidate';
import { PROFILECANDIDATE, CANDIDATEPAGINATIONONE, CANDIDATEPAGINATIONTWO, CANDIDATEPAGINATIONTHREE, ABOUTUSER } from "../constants/routeName";

export default function HomeNavigator() {

    const HomeStack = createNativeStackNavigator();

    return (

        <HomeStack.Navigator initialRouteName={PROFILECANDIDATE}>
            <HomeStack.Screen name={PROFILECANDIDATE} component={ProfileCandidate} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONONE} component={CandidatePaginationPartOne} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONTWO} component={CandidatePaginationPartTwo} />
            <HomeStack.Screen name={CANDIDATEPAGINATIONTHREE} component={CandidatePaginationPartThree} />
            <HomeStack.Screen name={ABOUTUSER} component={AboutCandidate} />
        </HomeStack.Navigator>

    );

};
