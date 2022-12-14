import { Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import FormRegisterCandidate from "../../components/general/FormRegisterCandidate";
import axiosInstance from "../../helpers/axiosInterceptor";


export default function RegisterCandidate() {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        "user_id": 1,
        "mail": "remy@c.fr",
        "password": "1234"
    });

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })

        if (value !== '') {

            if (name === 'password') {
                if (value.length < 3) {
                    setErrors((prev) => { return { ...prev, [name]: 'Ce champ doit contenir au moins 6 caractères' } })
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    })
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                })
            }

        } else {
            setErrors((prev) => { return { ...prev, [name]: 'Ce champ est obligatoire' } })
        }
    }

    const onSubmit = () => {
        // validations
        console.log('form :>> ', form);

        if (!form.mail) {
            setErrors((prev) => {
                return { ...prev, mail: 'Veuillez ajouter une adresse mail' }
            })
        }

        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Veuillez ajouter un mot de passe' }
            })
        }

        // if (!form.passwordConfirm) {
        //     setErrors(prev => {
        //         return { ...prev, passwordConfirm: 'Confirmation votre mot de passe' }
        //     })
        // }
    }

    return (

        <FormRegisterCandidate
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
        />
    );

};
