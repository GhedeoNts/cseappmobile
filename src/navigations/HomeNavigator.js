import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenProfileCandidate from '../screens/ScreenProfileCandidate';
import ScreenCandidatePaginationPartOne from '../screens/ScreenCandidatePaginationPartOne';
import ScreenCandidatePaginationPartTwo from '../screens/ScreenCandidatePaginationPartTwo';
import ScreenCandidatePaginationPartThree from '../screens/ScreenCandidatePaginationPartThree';
import ScreenAboutCandidate from '../screens/ScreenAboutCandidate';

export default function HomeNavigator() {

    const HomeStack = createNativeStackNavigator();

    return (

        <HomeStack.Navigator initialRouteName="Profile candidat">
            <HomeStack.Screen name='Profile candidat' component={ScreenProfileCandidate} />
            <HomeStack.Screen name='Modifier votre profil' component={ScreenCandidatePaginationPartOne} />
            <HomeStack.Screen name='Modifier votre profil Etape 2' component={ScreenCandidatePaginationPartTwo} />
            <HomeStack.Screen name='Modifier votre profil Etape 3' component={ScreenCandidatePaginationPartThree} />
            <HomeStack.Screen name='A propros' component={ScreenAboutCandidate} />
        </HomeStack.Navigator>

    );

};
