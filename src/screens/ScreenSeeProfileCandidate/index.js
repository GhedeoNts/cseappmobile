import { SafeAreaView, Image, Text, View, ScrollView } from "react-native";
import React from "react";
import NavBarApp from "../../../components/general/NavBarApp";
import HerosForApp from "../../../components/general/HerosForApp";
import ImgForApp from "../../../utils/ImgApp";
import StringAppFr from "../../../resources/strings/fr-FR";
import ButtonApp from "../../../components/general/ButtonApp";
import styles from './StyleScreenSeeProfileCandidate'
import ContentScreenMessage from "../../../components/general/ContentScreenMessage";
import SubTitleScreen from "../../../components/general/SubTitleScreen";


export default function ScreenSeeProfileCandidate() {

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.styleScrollView}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileRecruiterSearchCandidate}
                />

                <View style={styles.ViewContainer}>

                    <View style={styles.styleViewImgProfileAndNameCandidate}>
                        <View style={styles.ViewAvatarProfileCandidate}>
                            <Image
                                style={styles.styleAvatarProfileCandidate}
                                source={ImgForApp.avatarImg.avatarScreenSearchCandidate.avatarTree}
                            />
                        </View>

                        <View style={styles.styleViewProfileName}>
                            <Text style={styles.styleProfileName}>{StringAppFr.screenProfilesSelectedByTheEmployer.NameOfCandidate}</Text>
                        </View>
                    </View>

                    <View style={styles.styleViewInfoCandidate}>
                        <ContentScreenMessage
                            StyleHeaderTitle={styles.styleInfoProfileCandidate}
                            StyleBodyTitle={styles.styleInfoProfileCandidate}
                            StyleFooterTitle={styles.styleInfoProfileCandidate}
                            ContentHeaderTitle={StringAppFr.screenProfilesSelectedByTheEmployer.age}
                            ContentBodyTitle={StringAppFr.screenProfilesSelectedByTheEmployer.address}
                            ContentFooterTitle={StringAppFr.screenProfilesSelectedByTheEmployer.mailAddress}
                        />
                    </View>


                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewTitleDegree}
                        StyleSubTitle={styles.styleTitleDegree}
                        ContentSubTitle={StringAppFr.screenProfilesSelectedByTheEmployer.titleSubSectionDegrees}
                    />

                    <View style={styles.styleViewBodyDegree}>

                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.diplomaWithDateObtained}</Text>
                        </View>
                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.diplomaWithDateObtained}</Text>
                        </View>

                    </View>

                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewTitleAvailableWeekdays}
                        StyleSubTitle={styles.styleTitleAvailableWeekdays}
                        ContentSubTitle={StringAppFr.screenProfilesSelectedByTheEmployer.AvailableWeekdays.title}
                    />

                    <View style={styles.styleViewBodyDegreeAndAvailableDuringTheHolidaysOf}>

                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.AvailableWeekdays.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.AvailableWeekdays.days}</Text>
                        </View>
                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.AvailableDuringTheHolidaysOf.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.styleBodyDegree}>{StringAppFr.screenProfilesSelectedByTheEmployer.AvailableDuringTheHolidaysOf.periode}</Text>
                        </View>

                    </View>

                    <View style={styles.containerButtonApp}>

                        <ButtonApp
                            styleButton={styles.stylesButtonContact}
                            styleTitle={styles.stylesTitle}
                            titleButton={StringAppFr.screenProfilesSelectedByTheEmployer.buttonTitleContact}
                            ActiveOpacity={0.6}
                        // UnderlayColor={styles}
                        />

                        <ButtonApp
                            styleButton={styles.stylesButtonBack}
                            styleTitle={styles.stylesTitle}
                            titleButton={StringAppFr.screenProfilesSelectedByTheEmployer.buttonTitleBack}
                            ActiveOpacity={0.6}
                        // UnderlayColor={styles}
                        />

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );

};
