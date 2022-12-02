import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./StylePaginationApp";
import ButtonApp from '../ButtonApp';
import StringAppFr from "../../../resources/strings/fr-FR";

const PaginationApp = () => {

    return (

        <View style={styles.containerPagination}>

            <ButtonApp
                styleButton={styles.styleButtonNext}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditCandidate.paging.ButtonTitle.buttonPrev}
            />

            <ButtonApp
                styleButton={styles.styleButtonPagination1}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditCandidate.paging.numberpaging.one}
            />

            <ButtonApp
                styleButton={styles.styleButtonPagination2}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditCandidate.paging.numberpaging.two}
            />

            <ButtonApp
                styleButton={styles.styleButtonPagination3}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditCandidate.paging.numberpaging.tree}
                ActiveOpacity={0.6}
                UnderlayColor={{ color: '#7050D5' }}
            />

            <ButtonApp
                styleButton={styles.styleButtonNext}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditCandidate.paging.ButtonTitle.buttonNext}
            />

        </View>

    );

};

export default PaginationApp;
