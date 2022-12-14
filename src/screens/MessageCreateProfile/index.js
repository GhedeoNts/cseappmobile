import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenMessageCreateProfile";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import ContentScreenMessage from "../../components/general/ContentScreenMessage/index.js";
import FooterBar from "../../components/general/FooterBar";

export default function MessageChangepassword() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileCandidate}
                />
                <ContentScreenMessage
                    StyleViewContainer={styles.styleViewContainer}
                    StyleViewHeaderTitle={styles.styleViewHeaderTitle}
                    StyleHeaderTitle={styles.styleHeaderTitle}
                    ContentHeaderTitle={StringAppFr.screenCandidateProfileValidation.headerTitle}
                    StyleViewBodyTitle={styles.styleViewBodyTitle}
                    StyleBodyTitle={styles.styleBodyTitle}
                    ContentBodyTitle={StringAppFr.screenCandidateProfileValidation.bodyTitle}
                    StyleViewCurrentDate={styles.styleViewCurrentDate}
                    StyleCurrentDate={styles.styleCurrentDate}
                    CurrentDate={StringAppFr.screenCandidateProfileValidation.screenValidityDate}
                    StyleViewFooterTitle={styles.styleViewFooterTitle}
                    StyleFooterTitle={styles.styleFooterTitle}
                    ContentFooterTitle={StringAppFr.screenCandidateProfileValidation.footerTitle}
                />
            </ScrollView>
            <FooterBar />
        </SafeAreaView>
    );
};
