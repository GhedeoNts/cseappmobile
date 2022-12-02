import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./StylePaginationRecruiterApp";
import ButtonApp from '../ButtonApp';
import StringAppFr from "../../../resources/strings/fr-FR";

const PaginationRecruiterApp = () => {

    return (

        <View style={styles.containerPagination}>

            <ButtonApp
                styleButton={styles.styleButtonNext}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditRecruiter.paging.ButtonTitle.buttonPrev}
            />

            <ButtonApp
                styleButton={styles.styleButtonPagination1}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditRecruiter.paging.numberpaging.one}
            />

            <ButtonApp
                styleButton={styles.styleButtonPagination3}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditRecruiter.paging.numberpaging.two}
                ActiveOpacity={0.6}
                UnderlayColor={{ color: '#7050D5' }}
            />

            <ButtonApp
                styleButton={styles.styleButtonNext}
                styleTitle={styles.styleTitleButton}
                titleButton={StringAppFr.screenProfileEditRecruiter.paging.ButtonTitle.buttonValider}
            />

        </View>

    );

};

export default PaginationRecruiterApp;
