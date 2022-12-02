import { ScrollView, StyleSheet, SafeAreaView, Text, View } from "react-native";
import React, { useState } from "react";
import styles from './StyleScreenCreateProfileCandidate';
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import ImgForApp from "../../utils/ImgApp";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import StringAppFr from "../../resources/strings/fr-FR";
import FormCreateCandidate from "../../components/general/FormCreateProfileCandidate";
import ContainerDegree from '../../components/general/ContainerDegree';
import MyAvailabilities from "../../components/general/MyAvailabilities";
import ButtonApp from "../../components/general/ButtonApp";
import generalStylesApp from "../../styles/generalStylesApp";

export default function ScreenCreateProfileCandidate() {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerScreenCreateProfile}>

                <NavBarApp />

                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileCandidate}
                />

                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.subTitle}
                />
                <FormCreateCandidate />
                <ContainerDegree />
                <MyAvailabilities />
                <View style={{ alignSelf: "center", justifyContent: "center", marginBottom: 20 }}>
                    <ButtonApp
                        styleButton={{
                            width: 102,
                            height: 50,
                            borderRadius: 9,
                            backgroundColor: '#7050D5',
                            marginTop: 33.35,
                            marginBottom: 5,
                            justifyContent: 'center'
                        }}
                        styleTitle={{
                            fontSize: 16,
                            lineHeight: 19.36,
                            textAlign: 'center',
                            fontWeight: '700',
                            color: generalStylesApp.ColorFromApp.SECOND_COLOR,
                            fontStyle: 'normal',
                        }}
                        titleButton={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.ButtonTitleFinish}

                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

