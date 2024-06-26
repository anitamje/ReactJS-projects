import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { checkToken } from "../assets/functions";

const userData = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const checkValidToken = checkToken(localStorage.getItem("token"));
const initialState = {
    token: checkValidToken,
    userInfo: !checkValidToken || userData,
    language: localStorage.getItem("lang") || "sq",
};

const Products = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);

export default Products;
