import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenSendMessageSuccessfully";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import ImgForApp from "../../utils/ImgApp";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";
import StringAppFr from "../../resources/strings/fr-FR";

export default function SendMessageSuccessfully() {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View>
                    <NavBarApp />
                    <HerosForApp
                        imgSource={ImgForApp.heros.imgHeroScreenCreateProfileRecruiterSearchCandidate}
                    />

                    <ContentScreenMessage
                        StyleViewContainer={styles.styleViewContainer}
                        StyleViewHeaderTitle={styles.styleViewHeaderTitle}
                        StyleViewBodyTitle={styles.StyleViewBodyTitle}
                        StyleViewFooterTitle={styles.styleViewFooterTitle}
                        StyleHeaderTitle={styles.styleHeaderTitle}
                        StyleBodyTitle={styles.StyleBodyTitle}
                        StyleFooterTitle={styles.StyleFooterTitle}
                        ContentHeaderTitle={StringAppFr.screenValidationContactFormCandidate.headerTitle}
                        ContentBodyTitle={StringAppFr.screenValidationContactFormCandidate.bodyTitle}
                        ContentFooterTitle={StringAppFr.screenValidationContactFormCandidate.footerTitle}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );

};


