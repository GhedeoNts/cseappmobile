import { View, Text } from "react-native";
import React, { useState } from "react";
import NavBarApp from "../NavBarApp";
import HerosForApp from "../HerosForApp";
import StringAppFr from "../../../resources/strings/fr-FR";
import ImgForApp from "../../../utils/ImgApp";
import styles from "./StylesFormConnexion";
import FooterBar from "../FooterBar";
import LabelInputApp from "../LabelInputApp";
import InputFormApp from "../InputFormApp";
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";
import ScreenLoginForgetPassword from "../../../screens/LoginForgetPassword";
import ScreenRegister from "../../../screens/Register";
import Container from "../../common/Container";
import TouchableButton from "../TouchableButton";
import { useNavigation } from "@react-navigation/native";


// APi Client 
import axios from "axios";


const FormLoginConnexion = () => {

    const { navigate } = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, onChangeText] = useState(null)

    return (

        <Container>
            <NavBarApp />
            <HerosForApp imgSource={ImgForApp.heros.imgHeroScreen} />
            <View style={styles.containerform}>

                <View style={styles.viewSubTitleStyle}>
                    <Text style={styles.subTitleStyle}>{StringAppFr.screenLoginCandidateOrRegister.subTitle}</Text>
                </View>

                <InputFormApp
                    StyleViewContainerInputForm={styles.viewContainerInputMail}
                    LabelInput={<LabelInputApp
                        StyleInputLabel={styles.styleinputLabel}
                        ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.mailAddress}
                    />}

                    StyleInput={styles.styleInputMail}
                    PlaceholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInput.mailAddress}
                    Value={value}
                    OnchangeText={(text) => onChangeText(text)}
                // error={StringAppFr.error.fieldMessage}
                />

                <InputFormApp
                    StyleViewContainerInputForm={styles.viewContainerInputPassword}
                    LabelInput={<LabelInputApp
                        StyleInputLabel={styles.styleinputLabel}
                        ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.passWords}
                    />}

                    StyleInput={styles.styleInputPassword}
                    PlaceholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInput.passWords}
                    Value={value}
                    OnchangeText={(text) => onChangeText(text)}
                    SecureTextEntry={true}
                    iconPosition={'right'}
                    icon={<Text>Cacher</Text>}
                // error={StringAppFr.error.fieldMessage}
                />

                <View style={styles.viewContainerTitleForgetPassword}>
                    <TouchableButton
                        styleTitle={styles.styletitleForgotPassword}
                        titleButton={StringAppFr.screenLoginCandidateOrRegister.titleForgotPassword}
                        ActiveOpacity={0.6}
                        UnderlayColor={generalStylesApp.ColorFromApp.SECOND_COLOR}
                        OnPressButton={() => navigate(ScreenLoginForgetPassword)}
                    />
                </View>

                <View style={styles.viewContainerButtonConnexion}>
                    <ButtonApp
                        styleButton={styles.styleButtonConnexion}
                        styleTitle={styles.styleTitleButtonConnexion}
                        titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleConnexion}
                        ActiveOpacity={0.6}
                        UnderlayColor={generalStylesApp.ColorButton.ButtonConnexion}
                        primary
                    // Disabled={true}
                    />
                </View>

                <View style={styles.viewContainerButtonRegister}>
                    <TouchableButton
                        styleButton={styles.styleButtonRegister}
                        styleTitle={styles.styleTitleButtonRegister}
                        titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleRegister}
                        ActiveOpacity={0.6}
                        UnderlayColor={generalStylesApp.ColorButton.ButtonRegister}
                        OnPressButton={() => navigate(ScreenRegister)}
                    />
                </View>

            </View>
            <FooterBar />
        </Container>
    );
};

export default FormLoginConnexion;
