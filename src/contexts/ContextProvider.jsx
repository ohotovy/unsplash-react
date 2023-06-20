import { Context } from "./Context";
import { useReducer } from "react";

import { KEYS } from "../../keys";
import { reducer } from "../../reducer";

export const ContextProvider = ({children}) => {
    const initialSetup = {
        apiKey: KEYS.UNSPLASH_API_KEY,
        width: 300,
        height: 300
    }

    const [context, setContext] = useReducer(reducer, initialSetup);

    return (
        <Context.Provider value={{context, dispatch: setContext}}>
            {children}
        </Context.Provider>
    )
}