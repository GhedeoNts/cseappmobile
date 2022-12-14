import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenMessageChangepasswordscandidate.js";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import ContentScreenMessage from "../../components/general/ContentScreenMessage/index.js";


export default function ScreenMessageChangepassword() {
    return (

        <SafeAreaView style={styles.container}>
            <NavBarApp />
            <HerosForApp
                imgSource={ImgForApp.heros.ImgHeroScreenChangePasswordCandidate}
            />
            <ContentScreenMessage
                StyleViewContainer={styles.styleViewContainer}
                StyleViewHeaderTitle={styles.styleViewHeaderTitle}
                StyleHeaderTitle={styles.styleHeaderTitle}
                ContentHeaderTitle={StringAppFr.screenMessageEditPasswordCandidate.headerTitle}
                StyleViewBodyTitle={styles.styleViewBodyTitle}
                StyleBodyTitle={styles.styleBodyTitle}
                ContentBodyTitle={StringAppFr.screenMessageEditPasswordCandidate.bodyTitle}
                StyleViewCurrentDate={styles.styleViewCurrentDate}
                StyleCurrentDate={styles.styleCurrentDate}
                CurrentDate={StringAppFr.screenMessageEditPasswordCandidate.screenValidityDate}
                StyleViewFooterTitle={styles.styleViewFooterTitle}
                StyleFooterTitle={styles.styleFooterTitle}
                ContentFooterTitle={StringAppFr.screenMessageEditPasswordCandidate.footerTitle}
            />
        </SafeAreaView>

    );
};
