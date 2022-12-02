import { SafeAreaView, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./styleScreenRegister";
import StringAppFr from "../../resources/strings/fr-FR";
import HerosForApp from "../../components/general/HerosForApp";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import ChoiceProfileCreation from "../../components/general/ChoiceProfileCreation";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import FooterBar from "../../components/general/FooterBar";

export default function ScreenRegister() {

    return (
        <ScrollView style={styles.body}>

            <NavBarApp />

            <HerosForApp imgSource={ImgForApp.heros.imgHeroScreen} />

            <View style={styles.containerScreenChoiceProfile}>

                <SubTitleScreen
                    StyleSubTitle={styles.subTitleStyle}
                    StyleViewSubTitle={styles.viewSubTitleStyle}
                    ContentSubTitle={StringAppFr.screenRegisterChoiceProfile.subTitle}
                />

                <ChoiceProfileCreation
                    StyleViewContainerImgChoiceProfile={styles.ContainerimgChoiceProfile}
                    StyleImgChoiceProfile={styles.imgChoiceProfile}
                    StyleViewContainerTitleProfile={styles.viewContainerTitleProfile}
                    StyleChoiceTitleProfile={styles.styleTitleProfile}
                    ImgSourceProfileChoice={ImgForApp.imgScreenChoice.Candidate}
                    TitleChoiceProfile={StringAppFr.screenRegisterChoiceProfile.candidateSectionTitle}
                />

                <ChoiceProfileCreation
                    StyleViewContainerImgChoiceProfile={styles.ContainerimgChoiceProfile}
                    StyleImgChoiceProfile={styles.imgChoiceProfile}
                    StyleViewContainerTitleProfile={styles.viewContainerTitleProfile}
                    StyleChoiceTitleProfile={styles.styleTitleProfile}
                    ImgSourceProfileChoice={ImgForApp.imgScreenChoice.Recruiter}
                    TitleChoiceProfile={StringAppFr.screenRegisterChoiceProfile.recruiterSectionTitle}
                />

            </View>
            <FooterBar />
        </ScrollView>
    );
};
