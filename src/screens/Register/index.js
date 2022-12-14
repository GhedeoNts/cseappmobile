import { SafeAreaView, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from './styleScreenRegister'
import StringAppFr from "../../resources/strings/fr-FR";
import HerosForApp from "../../components/general/HerosForApp";
import ImgForApp from "../../utils/ImgApp";
import NavBarApp from "../../components/general/NavBarApp";
import ChoiceProfileCreation from "../../components/general/ChoiceProfileCreation";
import SubTitleScreen from "../../components/general/SubTitleScreen";
import FooterBar from "../../components/general/FooterBar";
import { LOGINUSER } from "../../constants/routeName";
import { REGISTERCANDIDATE, REGISTERECRUITER } from "../../constants/routeName";
import TouchableButton from "../../components/general/TouchableButton";
import { useNavigation } from "@react-navigation/native";

export default function Register({ navigation }) {

    const { navigate } = useNavigation();

    return (
        <ScrollView style={styles.body}>

            <NavBarApp Navigation={() => { navigation.navigate(LOGINUSER) }} />

            <HerosForApp imgSource={ImgForApp.heros.imgHeroScreen} />

            <View style={styles.containerScreenChoiceProfile}>

                <SubTitleScreen
                    StyleSubTitle={styles.subTitleStyle}
                    StyleViewSubTitle={styles.viewSubTitleStyle}
                    ContentSubTitle={StringAppFr.screenRegisterChoiceProfile.subTitle}
                />

                <TouchableButton
                    ActiveOpacity={0.6}
                    OnPressButton={() => navigate(REGISTERCANDIDATE)}
                >
                    <ChoiceProfileCreation
                        StyleViewContainerImgChoiceProfile={styles.ContainerimgChoiceProfile}
                        StyleImgChoiceProfile={styles.imgChoiceProfile}
                        StyleViewContainerTitleProfile={styles.viewContainerTitleProfile}
                        StyleChoiceTitleProfile={styles.styleTitleProfile}
                        ImgSourceProfileChoice={ImgForApp.imgScreenChoice.Candidate}
                        TitleChoiceProfile={StringAppFr.screenRegisterChoiceProfile.candidateSectionTitle}
                    />
                </TouchableButton>

                <TouchableButton
                    ActiveOpacity={0.6}
                    OnPressButton={() => navigate(REGISTERECRUITER)}
                >
                    <ChoiceProfileCreation
                        StyleViewContainerImgChoiceProfile={styles.ContainerimgChoiceProfile}
                        StyleImgChoiceProfile={styles.imgChoiceProfile}
                        StyleViewContainerTitleProfile={styles.viewContainerTitleProfile}
                        StyleChoiceTitleProfile={styles.styleTitleProfile}
                        ImgSourceProfileChoice={ImgForApp.imgScreenChoice.Recruiter}
                        TitleChoiceProfile={StringAppFr.screenRegisterChoiceProfile.recruiterSectionTitle}
                    />
                </TouchableButton>

            </View>
            <FooterBar />
        </ScrollView>
    );
};
