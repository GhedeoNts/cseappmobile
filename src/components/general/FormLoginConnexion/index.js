import { Text, View, TextInput, Alert } from "react-native";
import React, { useContext } from "react";
import styles from "./StylesFormConnexion";
import StringAppFr from "../../../resources/strings/fr-FR";
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";
import LabelInputApp from "../LabelInputApp";
import InputFormApp from "../InputFormApp";

const {
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

const FormLoginConnexion = ({ ValueUsername, ValuePassword, SetValueUsername, SetValuePassword, placeholderForm, MyNavigation, SignInMethod, SignUpMethod }) => {

    const messageTest = () => Alert.alert('Test MSG', 'Application is running');

    return (

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
                PlaceholderForm={placeholderForm.mailAddress}
                ValueInputForm={ValueUsername}
                OnchangeText={SetValueUsername}
            />


            <InputFormApp
                StyleViewContainerInputForm={viewContainerInputPassword}
                LabelInput={<LabelInputApp
                    StyleInputLabel={styleinputLabel}
                    ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.passWords}
                />}
                StyleInputForm={styleInputPassword}
                PlaceholderForm={placeholderForm.passWords}
                ValueInputForm={ValuePassword}
                OnchangeText={SetValuePassword}
                SecureTextEntry={true}
            />

            <View style={viewContainerTitleForgetPassword}>
                <ButtonApp
                    styleTitle={styletitleForgotPassword}
                    titleButton={StringAppFr.screenLoginCandidateOrRegister.titleForgotPassword}
                    ActiveOpacity={0.6}
                    UnderlayColor={generalStylesApp.ColorFromApp.SECOND_COLOR}
                    OnPressButton={messageTest}
                />
            </View>

            <View style={viewContainerButtonConnexion}>
                <ButtonApp
                    styleButton={styleButtonConnexion}
                    styleTitle={styleTitleButtonConnexion}
                    titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleConnexion}
                    ActiveOpacity={0.6}
                    UnderlayColor={generalStylesApp.ColorButton.ButtonConnexion}
                    OnPressButton={SignInMethod}
                />
            </View>

            <View style={viewContainerButtonRegister}>
                <ButtonApp
                    styleButton={styleButtonRegister}
                    styleTitle={styleTitleButtonRegister}
                    titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleRegister}
                    ActiveOpacity={0.6}
                    UnderlayColor={generalStylesApp.ColorButton.ButtonRegister}
                    OnPressButton={messageTest}
                />
            </View>

        </View>
    );
};

export default FormLoginConnexion;
