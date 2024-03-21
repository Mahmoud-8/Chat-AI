import { createContext } from "react";
import runChat from "../config/Hepha";

export const Context = createContext();
const ContextProvider = (props) => {

    



    const onSent = async (prompt) => {
        runChat(prompt)
    }

    // onSent("where is Egypt?")

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider