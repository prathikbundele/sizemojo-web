import React, {createContext, useReducer} from 'react';
import { AppReducer } from '../reducers/AppReducer';


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [details, dispatch] = useReducer(AppReducer, {});

    return(
        <AppContext.Provider value={{details, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;