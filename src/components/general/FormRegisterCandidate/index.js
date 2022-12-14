import { Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import styles from "./StylesFormRegisterCandidate";
import StringAppFr from "../../../resources/strings/fr-FR";
import ImgForApp from "../../../utils/ImgApp";
import NavBarApp from "../NavBarApp";
import HerosForApp from "../HerosForApp";
import SubTitleScreen from "../SubTitleScreen";
import InputFromApp from '../../../components/general/InputFormApp';
import LabelInputApp from "../LabelInputApp";
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";
import FooterBar from "../FooterBar";
import Container from "../../common/Container";

const FormRegisterCandidate = ({
    onSubmit,
    onChange,
    form,
    errors,
}) => {

    return (

        <Container>

            <NavBarApp />
            <HerosForApp
                imgSource={ImgForApp.heros.imgHeroScreenCreateProfileCandidate}
            />
            <SubTitleScreen
                StyleViewSubTitle={styles.styleViewSubTitle}
                StyleSubTitle={styles.styleSubTitle}
                ContentSubTitle={StringAppFr.screenRegisterCandidate.subTitle}
            />
            <View style={styles.containerform}>
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
                    OnchangeText={(value) => {
                        onChange({ name: 'mail', value });
                    }}
                    error={errors.mail}
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
                    SecureTextEntry={true}
                    OnchangeText={(value) => {
                        onChange({ name: 'password', value })
                    }}
                    error={errors.password}

                />
                {/* Champ à ajouter */}
                {/* <InputFromApp
                LabelInput={
                    <LabelInputApp
                        StyleViewInputLabel={styles.styleViewInputLabelPasswordConfirmation}
                        StyleInputLabel={styles.styleInputLabelPasswordConfirmation}
                        ContentLabel={StringAppFr.screenRegisterCandidate.labelInputPasswordConfirmation}
                    />
                }
                StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                StyleInputForm={styles.styleInputForm}
                SecureTextEntry={true}
                OnchangeText={(value) => {
                    onChange({ name: 'passwordConfirm', value })
                }}
                error={errors.passwordConfirm}
            /> */}
            </View>

            <View>
                <ButtonApp
                    styleButton={styles.styleButton}
                    styleTitle={styles.styleTitle}
                    titleButton={StringAppFr.screenRegisterCandidate.buttonTitleRegister}
                    ActiveOpacity={0.6}
                    UnderlayColor={styles.underLayColor}
                    OnPressButton={onSubmit}
                />
            </View>
            {/* <FooterBar /> */}
        </Container>

    );
};

export default FormRegisterCandidate;
