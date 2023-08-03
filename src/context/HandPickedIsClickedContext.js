import React, { createContext, useState } from 'react';

export const HandPickedIsClickedContext = createContext();

export const HandPickedIsClickedContextProvider = ({children}) =>{
    const [handPickedisClicked, setHandPickedisClicked] = useState(false);
    const contextValue = {
        handPickedisClicked,
        setHandPickedisClicked,
    };
    return <HandPickedIsClickedContext.Provider value ={contextValue}>{children}</HandPickedIsClickedContext.Provider>
}