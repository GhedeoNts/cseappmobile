import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenRegisterRecruiter";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from '../../utils/ImgApp';
import NavBarApp from '../../components/general/NavBarApp';
import HerosForApp from '../../components/general/HerosForApp';
import SubTitleScreen from '../../components/general/SubTitleScreen';
import InputFromApp from '../../components/general/InputFormApp';
import LabelInputApp from "../../components/general/LabelInputApp";
import ButtonApp from "../../components/general/ButtonApp";
import generalStylesApp from "../../styles/generalStylesApp";
import FooterBar from "../../components/general/FooterBar";

export default function RegisterRecruiter() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.styleScrollView}>

        <NavBarApp />
        <HerosForApp
          imgSource={ImgForApp.heros.imgHeroScreenCreateProfileRecruiter}
        />
        <SubTitleScreen
          StyleViewSubTitle={styles.styleViewSubTitle}
          StyleSubTitle={styles.styleSubTitle}
          ContentSubTitle={StringAppFr.screenRegisterRecruiter.subTitle}
        />

        <InputFromApp
          LabelInput={
            <LabelInputApp
              StyleViewInputLabel={styles.styleViewInputLabelSiret}
              StyleInputLabel={styles.styleInputLabelSiret}
              ContentLabel={StringAppFr.screenRegisterRecruiter.labelInputNumberSiret}
            />
          }
          StyleViewContainerInputForm={styles.styleViewContainerInputForm}
          StyleInputForm={styles.styleInputForm}
        />

        <InputFromApp
          LabelInput={
            <LabelInputApp
              StyleViewInputLabel={styles.styleViewInputLabelMail}
              StyleInputLabel={styles.styleInputLabelMail}
              ContentLabel={StringAppFr.screenRegisterCandidate.labelInputMailAddress}
            />
          }
          StyleViewContainerInputForm={styles.styleViewContainerInputForm}
          StyleInputForm={styles.styleInputForm}
        />

        <InputFromApp
          LabelInput={
            <LabelInputApp
              StyleViewInputLabel={styles.styleViewInputLabelPassword}
              StyleInputLabel={styles.styleInputLabelPassword}
              ContentLabel={StringAppFr.screenRegisterCandidate.labelInputPassWords}
            />
          }
          StyleViewContainerInputForm={styles.styleViewContainerInputForm}
          StyleInputForm={styles.styleInputForm}
        />

        <InputFromApp
          LabelInput={
            <LabelInputApp
              StyleViewInputLabel={styles.styleViewInputLabelPasswordConfirmation}
              StyleInputLabel={styles.styleInputLabelPasswordConfirmation}
              ContentLabel={StringAppFr.screenRegisterCandidate.labelInputPasswordConfirmation}
            />
          }
          StyleViewContainerInputForm={styles.styleViewContainerInputForm}
          StyleInputForm={styles.styleInputForm}
        />
        <View>
          <ButtonApp
            styleButton={styles.styleButton}
            styleTitle={styles.styleTitle}
            titleButton={StringAppFr.screenRegisterRecruiter.buttonTitleRegister}
            ActiveOpacity={0.6}
            UnderlayColor={styles.underLayColor}

          />
        </View>

      </ScrollView>
      <FooterBar />
    </SafeAreaView>

  );
};
