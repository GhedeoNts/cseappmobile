import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useState } from "react";
import styles from './StyleProfileSelected'
import SelectCandidate from "../../../components/general/SelectCandidate";
import NavBarApp from "../../../components/general/NavBarApp";
import HerosForApp from "../../../components/general/HerosForApp";
import SubTitleScreen from "../../../components/general/SubTitleScreen";
import ContentScreenMessage from "../../../components/general/ContentScreenMessage";
import ImgForApp from "../../../utils/ImgApp";
import StringAppFr from "../../../resources/strings/fr-FR";
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonApp from "../../../components/general/ButtonApp";

export default function ScreenSearchProfilesCandidates() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Nom', value: 'apple' },
        { label: 'Disponibilité', value: 'banana' }
    ]);

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={styles.styleScrollView}> */}

            <NavBarApp />
            <HerosForApp
                imgSource={ImgForApp.heros.imgHeroScreenCreateProfilRecruiterSearchCandidate}
            />
            <SubTitleScreen
                StyleViewSubTitle={styles.styleViewSubTitle}
                StyleSubTitle={styles.styleSubTitle}
                ContentSubTitle={StringAppFr.screenCandidateSearch.subTitle}
            />
            <ContentScreenMessage
                StyleViewContentMessageScreen={styles.styleViewContainerParagraph}
                StyleContentMessageScreen={styles.styleContainerParagraph}
                ContentMessageScreen={StringAppFr.screenCandidateSearch.Paragraph}
            />

            <View style={styles.styleViewButtonFilter}>

                <DropDownPicker
                    style={styles.styleButtonFilter}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />

            </View>

            <View style={styles.styleViewComponentSelectCandidate}>

                <View style={styles.styleComponentSelectCandidate}>
                    <SelectCandidate
                        StyleViewContainer={styles.styleViewContainer}
                        style={styles.styleComponentSelectCandidate}
                        FullNameContent={StringAppFr.screenCandidateSearch.namesOfCandidates.candidateTestOne}
                        ImgSourceCandidate={ImgForApp.avatarImg.avatarScreenSearchCandidate.avatarOne}
                    />
                </View>

                <View style={styles.styleComponentSelectCandidate}>
                    <SelectCandidate
                        StyleViewContainer={styles.styleViewContainerWithColor}
                        StyleNameCandidate={styles.styleNameCandidateWithColor}
                        style={styles.styleComponentSelectCandidate}
                        FullNameContent={StringAppFr.screenCandidateSearch.namesOfCandidates.candidateTwo}
                        ImgSourceCandidate={ImgForApp.avatarImg.avatarScreenSearchCandidate.avatarTwo}
                    />
                </View>

                <View style={styles}>

                </View>

                <View style={styles.styleComponentSelectCandidate}>
                    <SelectCandidate
                        StyleViewContainer={styles.styleViewContainerWithColor}
                        StyleNameCandidate={styles.styleNameCandidateWithColor}
                        style={styles.styleComponentSelectCandidate}
                        FullNameContent={StringAppFr.screenCandidateSearch.namesOfCandidates.candidateTree}
                        ImgSourceCandidate={ImgForApp.avatarImg.avatarScreenSearchCandidate.avatarTree}
                    />
                </View>

                <View style={styles.containerButtonApp} >
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor} titleButton={StringAppFr.screenCandidateSearch.buttonTitleSelectionOfCandidates}

                    />
                </View>
            </View>

            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

