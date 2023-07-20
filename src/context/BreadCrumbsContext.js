import React, { createContext, useState } from 'react';

export const BreadCrumbsContext = createContext();

export const BreadCrumbsProvider = ({children}) =>{
    const [pagesState, setPagesState] = useState(['/']);
    const contextValue = {
        pagesState,
        setPagesState,
    };
    return <BreadCrumbsContext.Provider value ={contextValue}>{children}</BreadCrumbsContext.Provider>
}