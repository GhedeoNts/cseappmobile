import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenEditPassword";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";
import LabelInputApp from "../../components/general/LabelInputApp";
import InputFormApp from "../../components/general/InputFormApp";
import ButtonApp from "../../components/general/ButtonApp";

export default function ScreenEditPassword() {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenMsgMdp}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenEditPasswordCandidate.subTitle}
                />
                <ContentScreenMessage
                    StyleViewContainer={styles.styleViewContainer}
                    StyleViewHeaderTitle={styles.styleViewContentMessageScreen}
                    ContentHeaderTitle={StringAppFr.screenEditPasswordCandidate.Paragraph}
                />
                <View style={styles.styleViewContainer}>
                    <InputFormApp
                        StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                        StyleInputForm={styles.styleInputForm}
                        PlaceholderForm={StringAppFr.screenEditPasswordCandidate.formLabelText.placeholderNewPassword}
                    />
                    <InputFormApp
                        StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                        StyleInputForm={styles.styleInputForm}
                        PlaceholderForm={StringAppFr.screenEditPasswordCandidate.formLabelText.placeholderConfirmPassword}
                    />
                </View>

                <View style={styles.containerButtonApp}>
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor} titleButton={StringAppFr.screenForgotPassword.ButtonTitleValidate}

                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
