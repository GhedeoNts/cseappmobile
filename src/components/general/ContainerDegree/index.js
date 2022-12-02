import { Text, View, Button } from "react-native";
import React, { useState } from "react";
import styles from "./StylesContainerDegree";
import Checkbox from 'expo-checkbox';
import StringAppFr from "../../../resources/strings/fr-FR";
import SubTitleScreen from "../SubTitleScreen";
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";
import InputFormApp from '../../general/InputFormApp'


const ContainerDegree = () => {

    // CheckBox
    const [isChecked, setChecked] = useState(false);
    const [selected, setSelected] = useState("");
    const [enabledSearch, setEnabledSearch] = useState(false);
    const data = [
        { key: '1', value: 'En cours' },
        { key: '2', value: 'Obtenu' },
    ]

    // DatePicker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <>

            <View style={styles.stylesContainerSubTitle}>
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitleDegreeAndSectionMyAvailabilities}
                    StyleSubTitle={styles.styleSubTitleDegreeAndSectionMyAvailabilities}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.subTitle}
                />
            </View>
            <View style={styles.stylesViewContainer}>


                <View style={styles.stylesViewContainerDegree}>
                    <View style={styles.sectionCheckBox}>
                        <Checkbox
                            style={styles.styleCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#003147' : undefined}
                        />
                    </View>
                    <View style={styles.styleViewContainerTextCheckBox}>
                        <Text>{StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.Bafa}</Text>
                    </View>
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        search={enabledSearch}
                        placeholder={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.statusDegree.encours}
                        maxHeight={250}
                        boxStyles={{
                            height: 42, justifyContent: "center",
                            alignItems: 'center',
                        }}
                        inputStyles={{ fontSize: 10, margin: 2 }}
                        dropdownTextStyles={{ fontSize: 10, margin: 2 }}
                    />
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <Button onPress={showDatepicker} title="JJ/MM/AAAA" />
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}

                </View>

            </View>

            <View style={styles.stylesViewContainer}>

                <View style={styles.stylesViewContainerDegree}>
                    <View style={styles.sectionCheckBox}>
                        <Checkbox
                            style={styles.styleCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#003147' : undefined}
                        />
                    </View>
                    <View style={styles.styleViewContainerTextCheckBox}>
                        <Text>{StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.Bafd}</Text>
                    </View>
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        search={enabledSearch}
                        placeholder={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.statusDegree.encours}
                        maxHeight={250}
                        boxStyles={{
                            height: 42, justifyContent: "center",
                            alignItems: 'center',
                        }}
                        inputStyles={{ fontSize: 10, margin: 2 }}
                        dropdownTextStyles={{ fontSize: 10, margin: 2 }}
                    />
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <Button onPress={showDatepicker} title="JJ/MM/AAAA" />
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}

                </View>

            </View>

            <View style={styles.stylesViewContainer}>

                <View style={styles.stylesViewContainerDegree}>
                    <View style={styles.sectionCheckBox}>
                        <Checkbox
                            style={styles.styleCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#003147' : undefined}
                        />
                    </View>
                    <View style={styles.styleViewContainerTextCheckBox}>
                        <Text>{StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.Bpjeps}</Text>
                    </View>
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        search={enabledSearch}
                        placeholder={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.statusDegree.encours}
                        maxHeight={250}
                        boxStyles={{
                            height: 42, justifyContent: "center",
                            alignItems: 'center',
                        }}
                        inputStyles={{ fontSize: 10, margin: 2 }}
                        dropdownTextStyles={{ fontSize: 10, margin: 2 }}
                    />
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <Button onPress={showDatepicker} title="JJ/MM/AAAA" />
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}

                </View>

            </View>

            <View style={styles.stylesViewContainer}>

                <View style={styles.stylesViewContainerDegree}>
                    <View style={styles.sectionCheckBox}>
                        <Checkbox
                            style={styles.styleCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#003147' : undefined}
                        />
                    </View>
                    <View style={styles.styleViewContainerTextCheckBox}>
                        <Text>{StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.Bpjeps}</Text>
                    </View>
                </View>

                <View style={styles.stylesViewContainerStatusDegree}>
                    <Button onPress={showDatepicker} title="JJ/MM/AAAA" />
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}

                </View>

            </View>

            <View style={styles.stylesViewContainerOtherDegree}>
                <View style={styles.stylesViewContainerDegree}>
                    <View style={styles.sectionCheckBox}>
                        <Checkbox
                            style={styles.styleCheckbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#003147' : undefined}
                        />
                    </View>
                    <View style={styles.styleViewContainerTextCheckBox}>
                        <Text>{StringAppFr.screenCreateYourProfileCandidate.diplomaSection.degree.Other}</Text>
                    </View>
                </View>
            </View>

            <InputFormApp
                StyleViewContainerInputForm={styles.stylesViewContainerInput}
                StyleInputForm={styles.stylesInputForm}
                PlaceholderForm={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.placeholderOther}
            />
        </>
    );

};

export default ContainerDegree;

