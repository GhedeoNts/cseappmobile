import { SafeAreaView, Image, Text, View, ScrollView } from "react-native";
import React from "react";
import NavBarApp from "../../../components/general/NavBarApp";
import HerosForApp from "../../../components/general/HerosForApp";
import ImgForApp from "../../../utils/ImgApp";
import StringAppFr from "../../../resources/strings/fr-FR";
import ButtonApp from "../../../components/general/ButtonApp";
import styles from "./StyleScreenContactCandidates";
import ContentScreenMessage from "../../../components/general/ContentScreenMessage";
import SubTitleScreen from "../../../components/general/SubTitleScreen";
import InputFormApp from "../../../components/general/InputFormApp";
import LabelInputApp from "../../../components/general/LabelInputApp";
import SelectCandidateSendMessage from "../../../components/general/SelectCandidateSendMessage";
import { LOGINUSER } from "../../constants/routeName";

export default function ScreenContactCandidates() {

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.styleScrollView}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfileRecruiterSearchCandidate}
                />

                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    StyleViewParagraph={styles.styleViewContainerParagraph}
                    StyleParagraph={styles.StyleContentParagraph}
                    ContentSubTitle={StringAppFr.screenContactCandidatesForm.subTitle}
                    ContentParagraph={StringAppFr.screenContactCandidatesForm.Paragraph}
                />


                <View style={styles.styleContainerForm}>

                    <View style={styles.styleContainerInputFormNameAndFirstName}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.name}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputFormNameAndFirstName}
                            StyleInputForm={styles.styleInputFormNameAndFirstName}
                        />
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.firstname}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputFormNameAndFirstName}
                            StyleInputForm={styles.styleInputFormNameAndFirstName}
                        />
                    </View>

                    <View style={styles.styleContainerInputForm}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.mail}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                            StyleInputForm={styles.styleInputForm}
                        />
                    </View>

                    <View style={styles.styleContainerInputForm}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.Structure}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                            StyleInputForm={styles.styleInputForm}
                        />
                    </View>

                    <View style={styles.styleContainerInputForm}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.numberPhone}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                            StyleInputForm={styles.styleInputForm}
                        />
                    </View>

                    <View style={styles.styleContainerInputFormDisplaysSelectedCandidates}>
                        <SelectCandidateSendMessage
                            StyleViewNameCandidate={styles.styleViewContent1}
                            StyleNameCandidate={styles.styleContent1}
                            NameCandidate={StringAppFr.screenContactCandidatesForm.candidates.candidate1}
                        />
                        <SelectCandidateSendMessage
                            StyleViewNameCandidate={styles.styleViewContent2}
                            StyleNameCandidate={styles.styleContent2}
                            NameCandidate={StringAppFr.screenContactCandidatesForm.candidates.candidate2}
                        />
                        <SelectCandidateSendMessage
                            StyleViewNameCandidate={styles.styleViewContent3}
                            StyleNameCandidate={styles.styleContent3}
                            NameCandidate={StringAppFr.screenContactCandidatesForm.candidates.candidate3}
                        />
                        <SelectCandidateSendMessage
                            StyleViewNameCandidate={styles.styleViewContent1}
                            StyleNameCandidate={styles.styleContent1}
                            NameCandidate={StringAppFr.screenContactCandidatesForm.candidates.candidate4}
                        />
                    </View>

                    <View style={styles.styleContainerInputForm}>
                        <InputFormApp
                            LabelInput={
                                <LabelInputApp
                                    StyleViewInputLabel={styles.styleViewInputLabel}
                                    StyleInputLabel={styles.styleInputLabel}
                                    ContentLabel={StringAppFr.screenContactCandidatesForm.formLabelText.yourMessage}
                                />
                            }
                            StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                            StyleInputForm={styles.styleInputFormTextArea}
                            MultiLine={true}
                            NumberOfLines={6}
                            PlaceholderForm={StringAppFr.screenContactCandidatesForm.formLabelText.placeholder}
                        />
                    </View>

                    <View style={styles.styleContainerInputFormYourMessage}>

                    </View>
                </View>


                <View style={styles.containerButtonApp}>

                    <ButtonApp
                        styleButton={styles.stylesButtonContact}
                        styleTitle={styles.stylesTitle}
                        titleButton={StringAppFr.screenContactCandidatesForm.buttonTitleSend}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor}
                    />

                    <ButtonApp
                        styleButton={styles.stylesButtonBack}
                        styleTitle={styles.stylesTitle}
                        titleButton={StringAppFr.screenContactCandidatesForm.buttonTitleBack}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor}
                    />

                </View>

            </ScrollView>
        </SafeAreaView>

    );

};
