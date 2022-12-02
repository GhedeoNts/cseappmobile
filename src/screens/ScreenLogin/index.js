import { ScrollView, SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import NavBarApp from "../../components/general/NavBarApp";
import HerosForApp from "../../components/general/HerosForApp";
import StringAppFr from "../../resources/strings/fr-FR";
import ImgForApp from "../../utils/ImgApp";
import styles from "./StyleScreenLogin";
import FooterBar from "../../components/general/FooterBar";
import LabelInputApp from "../../components/general/LabelInputApp";
import InputFormApp from "../../components/general/InputFormApp";
import ButtonApp from "../../components/general/ButtonApp";
import generalStylesApp from "../../styles/generalStylesApp";
import ScreenLoginForgetPassword from '../ScreenLoginForgetPassword'
import ScreenRegister from '../ScreenRegister'

// APi Client 
import axios from "axios";

const {
    body,
    StyleScrollView,
    containerform,
    viewSubTitleStyle,
    subTitleStyle,
    viewContainerInputMail,
    styleinputLabel,
    styleInputMail,
    viewContainerInputPassword,
    styleInputPassword,
    viewContainerTitleForgetPassword,
    styletitleForgotPassword,
    viewContainerButtonConnexion,
    styleButtonConnexion,
    styleTitleButtonConnexion,
    viewContainerButtonRegister,
    styleButtonRegister,
    styleTitleButtonRegister,
} = styles;

export default function ScreenLogin({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={body}>
            <ScrollView style={StyleScrollView}>
                <NavBarApp />
                <HerosForApp imgSource={ImgForApp.heros.imgHeroScreen} />
                <View style={containerform}>

                    <View style={viewSubTitleStyle}>
                        <Text style={subTitleStyle}>{StringAppFr.screenLoginCandidateOrRegister.subTitle}</Text>
                    </View>

                    <InputFormApp
                        StyleViewContainerInputForm={viewContainerInputMail}
                        LabelInput={<LabelInputApp
                            StyleInputLabel={styleinputLabel}
                            ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.mailAddress}
                        />}
                        StyleInputForm={styleInputMail}
                        PlaceholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInput.mailAddress}
                        ValueInputForm={username}
                        OnchangeText={setUsername}
                    />


                    <InputFormApp
                        StyleViewContainerInputForm={viewContainerInputPassword}
                        LabelInput={<LabelInputApp
                            StyleInputLabel={styleinputLabel}
                            ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.passWords}
                        />}
                        StyleInputForm={styleInputPassword}
                        PlaceholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInput.passWords}
                        ValueInputForm={password}
                        OnchangeText={setPassword}
                        SecureTextEntry={true}
                    />

                    <View style={viewContainerTitleForgetPassword}>
                        <ButtonApp
                            styleTitle={styletitleForgotPassword}
                            titleButton={StringAppFr.screenLoginCandidateOrRegister.titleForgotPassword}
                            ActiveOpacity={0.6}
                            UnderlayColor={generalStylesApp.ColorFromApp.SECOND_COLOR}
                            OnPressButton={() => navigation.navigate(ScreenLoginForgetPassword)}
                        />
                    </View>

                    <View style={viewContainerButtonConnexion}>
                        <ButtonApp
                            styleButton={styleButtonConnexion}
                            styleTitle={styleTitleButtonConnexion}
                            titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleConnexion}
                            ActiveOpacity={0.6}
                            UnderlayColor={generalStylesApp.ColorButton.ButtonConnexion}
                        />
                    </View>

                    <View style={viewContainerButtonRegister}>
                        <ButtonApp
                            styleButton={styleButtonRegister}
                            styleTitle={styleTitleButtonRegister}
                            titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleRegister}
                            ActiveOpacity={0.6}
                            UnderlayColor={generalStylesApp.ColorButton.ButtonRegister}
                            OnPressButton={() => navigation.navigate(ScreenRegister)}
                        />
                    </View>

                </View>
            </ScrollView>
            <FooterBar />
        </SafeAreaView>
    );

};

