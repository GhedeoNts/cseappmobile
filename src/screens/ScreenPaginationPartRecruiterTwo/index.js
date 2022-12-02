import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenPaginationPartRecruiter2";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import MyAvailabilities from "../../components/general/MyAvailabilities";
import FooterBar from "../../components/general/FooterBar";
import PaginationRecruiterApp from "../../components/general/PaginationRecruiterApp";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";

export default function ScreenPaginationPartRecruiterTwo() {

    return (

        <SafeAreaView style={styles}>
            <ScrollView style={styles}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfilRecruiter}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenProfileEditCandidate.subTitle}
                />
                <ContentScreenMessage
                    StyleViewContentMessageScreen={styles.styleViewContentMessageScreen}
                    StyleContentMessageScreen={styles.styleContentMessageScreen}
                    ContentMessageScreen={StringAppFr.screenProfileEditRecruiter.sectionMyAvailabilities.subTitle}
                />
                <MyAvailabilities />
                <PaginationRecruiterApp />
            </ScrollView>
        </SafeAreaView>

    );

};
