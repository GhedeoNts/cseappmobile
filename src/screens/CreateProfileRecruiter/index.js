import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from './StyleScreenCreateProfileRecruiter';
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from '../../utils/ImgApp';
import NavBarApp from '../../components/general/NavBarApp';
import HerosForApp from '../../components/general/HerosForApp';
import SubTitleScreen from '../../components/general/SubTitleScreen';
import ButtonApp from "../../components/general/ButtonApp";
import generalStylesApp from "../../styles/generalStylesApp";
import FooterBar from "../../components/general/FooterBar";
import FormCreateProfileRecruiter from "../../components/general/FormCreateProfileRecruiter";
import MyAvailabilities from "../../components/general/MyAvailabilities";
import ContentScreenMessage from "../../components/general/ContentScreenMessage";
import { LOGINUSER } from "../../constants/routeName";

export default function CreateProfileRecruiter() {

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
                    ContentSubTitle={StringAppFr.screenCreateYourProfileRecruiter.subTitle}
                />

                <FormCreateProfileRecruiter />
                <ContentScreenMessage
                    StyleViewContentMessageScreen={styles.styleViewContentMessageScreen}
                    StyleContentMessageScreen={styles.styleContentMessageScreen}
                    ContentMessageScreen={StringAppFr.screenProfileEditRecruiter.sectionMyAvailabilities.subTitle}
                />
                <MyAvailabilities />
                <View>
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor} titleButton={StringAppFr.screenCreateYourProfileRecruiter.ButtonTitleValidate}

                    />
                </View>

                <FooterBar />
            </ScrollView>
        </SafeAreaView>

    );

};
