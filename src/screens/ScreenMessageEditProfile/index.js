import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenMessageEditProfile.js";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import ContentScreenMessage from "../../components/general/ContentScreenMessage/index.js";

export default function ScreenMessageEditProfile() {
    return (

        <SafeAreaView style={styles.container}>

            <NavBarApp />
            <HerosForApp
                imgSource={ImgForApp.heros.imgHeroScreenCreateProfilCandidate}
            />
            <ContentScreenMessage
                StyleViewContainer={styles.styleViewContainer}
                StyleViewHeaderTitle={styles.styleViewHeaderTitle}
                StyleHeaderTitle={styles.styleHeaderTitle}
                ContentHeaderTitle={StringAppFr.screenCandidateProfileEditSuccessfully.headerTitle}
                StyleViewBodyTitle={styles.styleViewBodyTitle}
                StyleBodyTitle={styles.styleBodyTitle}
                ContentBodyTitle={StringAppFr.screenRecruiterProfileEditSuccessfully.bodyTitle}
                StyleViewCurrentDate={styles.styleViewCurrentDate}
                StyleCurrentDate={styles.styleCurrentDate}
                CurrentDate={StringAppFr.screenCandidateProfileEditSuccessfully.screenValidityDate}
                StyleViewFooterTitle={styles.styleViewFooterTitle}
                StyleFooterTitle={styles.styleFooterTitle}
                ContentFooterTitle={StringAppFr.screenRecruiterProfileEditSuccessfully.footerTitle}
            />
        </SafeAreaView>

    );
};
