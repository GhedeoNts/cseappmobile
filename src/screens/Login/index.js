import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../components/common/Input";
import StringAppFr from "../../resources/strings/fr-FR";
import Container from "../../components/common/container";

const Login = () => {

    const [value, onchangeValue] = useState();

    return (

        <Container>
            <Input
                label={StringAppFr.screenLoginCandidateOrRegister.formLabelText.mailAddress}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
        </Container>
    );

};

export default Login;
