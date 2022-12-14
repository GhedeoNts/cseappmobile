import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenPaginationPartRecruiterOne";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import FormCreateProfileRecruiter from "../../components/general/FormCreateProfileRecruiter";
import FooterBar from "../../components/general/FooterBar";
import PaginationRecruiterApp from "../../components/general/PaginationRecruiterApp";

export default function PaginationPartRecruiterOne() {

    return (

        <SafeAreaView style={styles}>
            <ScrollView style={styles}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileRecruiter}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenProfileEditCandidate.subTitle}
                />
                <FormCreateProfileRecruiter />
                <PaginationRecruiterApp />
            </ScrollView>
            <FooterBar />
        </SafeAreaView>

    );

};
