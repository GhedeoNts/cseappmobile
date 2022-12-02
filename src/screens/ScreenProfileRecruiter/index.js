import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenProfileRecruiter";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import ChoiceProfileCreation from "../../components/general/ChoiceProfileCreation";

export default function ScreenProfileRecruiter() {
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
                    ContentSubTitle={StringAppFr.screenProfileRecruiter.subTitle}
                />

                <View style={styles.containerChoiceActionProfileRecruiter}>

                    <View>
                        <ChoiceProfileCreation
                            StyleViewContainerImgChoiceProfil={styles.styleViewImgChoiceActionProfileRecruiter}
                            StyleImgChoiceProfil={styles.styleImgChoiceActionProfileRecruiter}
                            StyleViewConatinerTitleProfil={styles.styleViewContainerTitleActionProfileRecruiter}
                            StyleChoiceTitleProfil={styles.styleTitleActionProfileRecruiter}
                            ImgSourceProfilChoice={ImgForApp.imgScreenChoice.Recruiter}
                            TitleChoiceProfil={StringAppFr.screenProfileRecruiter.editProfile}
                        />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <ChoiceProfileCreation
                            StyleViewContainerImgChoiceProfil={styles.styleViewImgChoiceActionProfileRecruiter}
                            StyleImgChoiceProfil={styles.styleImgChoiceActionProfileRecruiter}
                            StyleViewConatinerTitleProfil={styles.styleViewContainerTitleActionProfileRecruiter}
                            StyleChoiceTitleProfil={styles.styleTitleActionProfileRecruiter}
                            ImgSourceProfilChoice={ImgForApp.imgScreenChoice.Candidate}
                            TitleChoiceProfil={StringAppFr.screenProfileRecruiter.searchForACandidate}
                        />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <ChoiceProfileCreation
                            StyleViewContainerImgChoiceProfil={styles.styleViewImgChoiceActionProfileRecruiter}
                            StyleImgChoiceProfil={styles.styleImgChoiceActionProfileRecruiter}
                            StyleViewConatinerTitleProfil={styles.styleViewContainerTitleActionProfileRecruiter}
                            StyleChoiceTitleProfil={styles.styleTitleActionProfileRecruiter}
                            ImgSourceProfilChoice={ImgForApp.imgScreenChoice.SearchOffer}
                            TitleChoiceProfil={StringAppFr.screenProfileRecruiter.submitAnOffer}
                        />
                    </View>


                </View>
            </ScrollView>

        </SafeAreaView>

    );
};
