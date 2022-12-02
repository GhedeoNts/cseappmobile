import { Text, View, Switch } from "react-native";
import React, { useState } from "react";
import StringAppFr from "../../../resources/strings/fr-FR";
import InputFormApp from "../InputFormApp";
import LabelInputApp from "../LabelInputApp";
import styles from "./StyleFormCreateProfileCandidate";
import SubTitleScreen from "../SubTitleScreen";
import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from "expo-checkbox";
import generalStylesApp from "../../../styles/generalStylesApp";
import ButtonApp from "../ButtonApp";
import DropDownPicker from 'react-native-dropdown-picker';

const FormCreateProfileCandidate = () => {

    // CheckBox
    const [isChecked, setChecked] = useState(false);

    const [enabledSearch, setEnabledSearch] = useState(false);
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur },
        { key: '2', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur },
    ]

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Animateur', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur },
        { label: 'Directeur', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur }
    ]);



    return (

        <View style={styles.formCreateCandidate}>

            <View>
                {/* <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    search={enabledSearch}
                    placeholder={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.placeholder}
                    // maxHeight={200}
                    boxStyles={{
                        width: 300, height: 50, justifyContent: "center",
                        alignItems: 'center',
                    }}
                    inputStyles={{ fontSize: 14, margin: 2 }}
                    dropdownTextStyles={{ fontSize: 14, margin: 2 }}
                /> */}
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
