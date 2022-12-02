import { Text, View } from "react-native";
import React from "react";
import styles from "./StyleFormCreateProfileRecruiter";
import LabelInputApp from '../LabelInputApp';
import InputFormApp from '../InputFormApp';
import StringAppFr from "../../../resources/strings/fr-FR";

const FormCreateProfileRecruiter = () => {

    return (

        <View style={styles.formInputContainer}>

            <InputFormApp
                LabelInput={
                    <LabelInputApp
                        StyleViewInputLabel={styles.styleViewInputLabelNameOfTheStucture}
                        StyleInputLabel={styles.styleInputLabelNameOfTheStucture}
                        ContentLabel={StringAppFr.screenCreateYourProfileRecruiter.NameOfTheStucture}
                    />
                }
                StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                StyleInputForm={styles.styleInputForm}
            />

            <InputFormApp
                LabelInput={
                    <LabelInputApp
                        StyleViewInputLabel={styles.styleViewInputLabelAddress}
                        StyleInputLabel={styles.styleInputLabelAddress}
                        ContentLabel={StringAppFr.screenCreateYourProfileRecruiter.address}
                    />
                }
                StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                StyleInputForm={styles.styleInputForm}
            />

            <View style={styles.styleViewContainerPostalCodeAndCity}>

                <View style={styles.styleContainerInputPostalCode}>

                    <InputFormApp
                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabelPostalCode}
                                StyleInputLabel={styles.styletyleInputLabelPostalCode}
                                ContentLabel={StringAppFr.screenCreateYourProfileRecruiter.postalCode}
                            />
                        }
                        StyleViewContainerInputForm={styles.styleViewContainerInputFormPostalCode}
                        StyleInputForm={styles.styleInputFormPostalCode}
                    />

                </View>

                <View style={styles.styleContainerInputCity}>

                    <InputFormApp
                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabelCity}
                                StyleInputLabel={styles.styletyleInputLabelCity}
                                ContentLabel={StringAppFr.screenCreateYourProfileRecruiter.city}
                            />
                        }
                        StyleViewContainerInputForm={styles.styleViewContainerInputFormCity}
                        StyleInputForm={styles.styleInputFormCity}
                    />

                </View>

            </View>

            <InputFormApp
                LabelInput={
                    <LabelInputApp
                        StyleViewInputLabel={styles.styleViewInputLabelAddress}
                        StyleInputLabel={styles.styleInputLabelAddress}
                        ContentLabel={StringAppFr.screenCreateYourProfileRecruiter.phone}
                    />
                }
                StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                StyleInputForm={styles.styleInputForm}
            />

        </View>

    );

};

export default FormCreateProfileRecruiter;

