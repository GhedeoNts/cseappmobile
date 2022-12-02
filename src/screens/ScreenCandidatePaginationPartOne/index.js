import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./ScreenCandidatePaginationPartOne";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import FormCreateCandidate from "../../components/general/FormCreateProfileCandidate";
import FooterBar from "../../components/general/FooterBar";
import PaginationApp from "../../components/general/PaginationApp";

export default function ScreenCandidatePaginationPartOne() {

    return (

        <SafeAreaView style={styles}>
            <ScrollView style={styles}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileCandidate}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenProfileEditCandidate.subTitle}
                />
                <FormCreateCandidate />
                <PaginationApp />
            </ScrollView>
        </SafeAreaView>

    );

};
