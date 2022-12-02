import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenAboutCandidate";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";

export default function ScreenAboutCandidate() {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreen}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenAboutCandidate.subTitle}
                />
                <View style={styles.StyleViewContainer}>
                    <ContentScreenMessage
                        StyleViewContentMessageScreen={styles.styleViewContentMessageScreen}
                        StyleContentMessageScreen={styles.styleContentMessageScreen}
                        ContentMessageScreen={StringAppFr.screenAboutCandidate.about}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>

    );

};
