import { Text, View, Switch } from "react-native";
import React, { useState } from "react";
import StringAppFr from "../../../resources/strings/fr-FR";
import InputFormApp from "../InputFormApp";
import LabelInputApp from "../LabelInputApp";
import styles from "./StyleMyAvailabilities";
import SubTitleScreen from "../SubTitleScreen";
import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from "expo-checkbox";
import generalStylesApp from "../../../styles/generalStylesApp";

const MyAvailabilities = () => {

    // CheckBox
    const [isChecked, setChecked] = useState(false);

    // Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

        <>

            <View style={styles.stylesViewInput}>
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitleSectionMyAvailabilities}
                    StyleSubTitle={styles.styleSubTitleSectionMyAvailabilities}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subTitle}
                />
            </View>


            <View style={styles.stylesViewInput}>
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitleSubSectionDayOfTheWeek}
                    StyleSubTitle={styles.styleSubTitleSubSectionDayOfTheWeek}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.titleSubSectionDayOfTheWeek}
                />
            </View>

            <View style={styles.stylesViewInput}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice1}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice2}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.stylesViewInput}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 300, height: 34 }}>
                    <View style={{ flexDirection: "row", width: 99, height: 30, alignItems: "center", }}>
                        <View style={{ justifyContent: "flex-start", marginLeft: 6, }}>
                            <Checkbox
                                style={styles.styleCheckbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#003147' : undefined}
                            />
                        </View>

                        <View style={{ marginLeft: 6 }}>
                            <Text>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice3}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", width: 145, height: 30, alignItems: "center", paddingRight: 80 }}>
                        <InputFormApp
                            StyleInputForm={{ width: 220, height: 29, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 1, borderRadius: 9, }}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.stylesViewInput}>
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitleSubSectionDayOfTheWeek}
                    StyleSubTitle={styles.styleSubTitleSubSectionDayOfTheWeek}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.titleSubSectionHolidayPeriods}
                />
            </View>

            <View style={styles.stylesViewInput}>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthFebrary}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthApril}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.stylesViewInput}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthJuly}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthOctober}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.stylesViewInput}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthAugust}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: 145, height: 30, justifyContent: "space-between", alignItems: "center", }}>
                        <View style={{ alignItems: "center", paddingLeft: 6 }}>

                            <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthChristmas}</Text>

                        </View>
                        <View style={{ alignItems: "center", paddingRight: 6 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

        </>


    );

};

export default MyAvailabilities;
