import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const userData = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    token: localStorage.getItem("token") || null,
    userInfo: userData,
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
