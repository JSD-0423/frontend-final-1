import React, { createContext, useState } from 'react';

export const SearchInputValueContext = createContext();

export const SearchInputValueProvider = ({children}) =>{
    const [inputValue, setInputValue] = useState("");
    const contextValue = {
        inputValue,
        setInputValue,
    };
    return <SearchInputValueContext.Provider value ={contextValue}>{children}</SearchInputValueContext.Provider>
}