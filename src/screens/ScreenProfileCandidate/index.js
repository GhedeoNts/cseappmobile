import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenProfileCandidate";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import ChoiceProfileCreation from "../../components/general/ChoiceProfileCreation";
import FooterBar from "../../components/general/FooterBar";
import ScreenCandidatePaginationPartOne from "../ScreenCandidatePaginationPartOne";
import ButtonApp from "../../components/general/ButtonApp";

export default function ScreenProfileCandidate({ navigation }) {

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
          ContentSubTitle={StringAppFr.screenProfileCandidate.subTitle}
        />

        <View style={styles.containerChoiceActionProfileCandidate}>

          <ChoiceProfileCreation
            StyleViewContainerImgChoiceProfile={styles.styleViewimgChoiceActionProfileCandidate}
            StyleImgChoiceProfile={styles.styleImgChoiceActionProfileCandidate}
            StyleViewContainerTitleProfile={styles.styleViewContainerTitleActionProfileCandidate}
            StyleChoiceTitleProfile={styles.styleTitleActionProfileCandidate}
            ImgSourceProfileChoice={ImgForApp.imgScreenChoice.Candidate}
            TitleChoiceProfile={StringAppFr.screenProfileCandidate.editProfile}
          />

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <ChoiceProfileCreation
              StyleViewContainerImgChoiceProfile={styles.styleViewimgChoiceActionProfileCandidate}
              StyleImgChoiceProfile={styles.styleImgChoiceActionProfileCandidate}
              StyleViewContainerTitleProfile={styles.styleViewContainerTitleActionProfileCandidate}
              StyleChoiceTitleProfile={styles.styleTitleActionProfileCandidate}
              ImgSourceProfileChoice={ImgForApp.imgScreenChoice.SearchOffer}
              TitleChoiceProfile={StringAppFr.screenProfileCandidate.searchForAOffer}
            />
          </View>


        </View>
      </ScrollView>
      <FooterBar />

    </SafeAreaView>

  );
};
