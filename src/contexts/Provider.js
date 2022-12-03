import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import candidatesInitialState from "./initialStates/candidatesInitialState";
import auth from "./reducers/auth";
import candidates from "./reducers/candidates";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(
        auth,
        authInitialState
    );
    const [candidatesState, candidatesDispatch] = useReducer(
        candidates,
        candidatesInitialState
    );

    return <GlobalContext.Provider value={{ authState, candidatesState, authDispatch, candidatesDispatch }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
