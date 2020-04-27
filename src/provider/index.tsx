import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer';
const StoreDataContext = React.createContext(initialState);

const StoreDataProvider = (props: { children: React.ReactNode }) => {
    const [globalState, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreDataContext.Provider value={{ globalState, dispatch }}>
            {props.children}
        </StoreDataContext.Provider>
    );
};
export { StoreDataContext, StoreDataProvider };
