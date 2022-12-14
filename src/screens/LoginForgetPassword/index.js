import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from './StyleScreenLoginForgetPassword'
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";
import LabelInputApp from "../../components/general/LabelInputApp";
import InputFormApp from "../../components/general/InputFormApp";
import ButtonApp from "../../components/general/ButtonApp";
import FooterBar from "../../components/general/FooterBar";
import { LOGINUSER } from "../../constants/routeName";

export default function LoginForgetPassword({ navigation }) {

    return (

        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <NavBarApp Navigation={() => { navigation.navigate(LOGINUSER) }} />
                    <HerosForApp
                        imgSource={ImgForApp.heros.imgHeroScreenMsgMdp}
                    />
                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewSubTitle}
                        StyleSubTitle={styles.styleSubTitle}
                        ContentSubTitle={StringAppFr.screenForgotPassword.subTitle}
                    />
                    <ContentScreenMessage
                        StyleViewContainer={styles.StyleViewContainer}
                        StyleViewHeaderTitle={styles.styleViewContentMessageScreen}
                        ContentHeaderTitle={StringAppFr.screenForgotPassword.ParagraphEntrezVotreAdressEmail}
                    />
                    <View style={styles.styleViewContainer}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenForgotPassword.formLabelText.mailAddress}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                            StyleInputForm={styles.styleInputForm}
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
                <FooterBar />
            </SafeAreaView>
        </>
    );

};
