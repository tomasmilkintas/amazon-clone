import React, { createContext, useReducer, useContext } from "react";
// we need this to track the basket

//this is the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
