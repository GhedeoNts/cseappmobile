import { Text, View, Switch } from "react-native";
import React, { useState } from "react";
import StringAppFr from "../../../resources/strings/fr-FR";
import InputFormApp from "../InputFormApp";
import LabelInputApp from "../LabelInputApp";
import styles from "./StyleFormCreateProfileCandidate";
import SubTitleScreen from "../SubTitleScreen";
// import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from "expo-checkbox";
import generalStylesApp from "../../../styles/generalStylesApp";
import ButtonApp from "../ButtonApp";
// import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from "@react-native-picker/picker";

const FormCreateProfileCandidate = () => {

    // CheckBox
    const [isChecked, setChecked] = useState(false);

    // Choice profile
    const [choiceProfile, setChoiceProfile] = useState(StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur);
    const [choiceProfileIndex, setChoiceProfileIndex] = useState(1);


    return (

        <View style={styles.formCreateCandidate}>

            <View style={styles.styleContainerChoiceProfile}>
                <Picker
                    selectedValue={choiceProfile}
                    onValueChange={(itemValue, itemIndex) => {
                        setChoiceProfile(itemValue)
                        setChoiceProfileIndex(itemIndex)
                    }}
                    mode="dropdown"
                    itemStyle={styles.styleChoiceProfile}
                    style={styles.styleInputChoiceProfile}
                >
                    <Picker.Item
                        label={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur}
                        value={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur}
                    />
                    <Picker.Item
                        label={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur}
                        value={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur}
                    />
                </Picker>
            </View>

            <View style={styles.styleContainerInput}>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.name}
                            />
                        }
                        StyleInputForm={styles.styleInputForm}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.firstName}
                            />
                        }

                        // StyleViewContainerInputForm={styles.stylesViewInput}
                        StyleInputForm={styles.styleInputForm}

                    />
                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.birthday}
                            />
                        }
                        StyleInputForm={styles.styleInputForm}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.phone}
                            />
                        }

                        // StyleViewContainerInputForm={styles.stylesViewInput}
                        StyleInputForm={styles.styleInputForm}

                    />
                </View>

                <View style={styles.stylesViewInputFormCodePostalAndCity}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.postalCode}
                            />
                        }
                        StyleInputForm={styles.styleInputFormCodePostal}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.city}
                            />
                        }
                        StyleInputForm={styles.styleInputFormCity}

                    />

                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.address}
                            />
                        }
                        StyleInputForm={styles.styleInputFormAddressAndUploadFile}

                    />

                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.attachAPhoto}
                            />
                        }
                        StyleInputForm={styles.styleInputFormAddressAndUploadFile}

                    />
                </View>


            </View>

        </View>
    );
};

export default FormCreateProfileCandidate;
