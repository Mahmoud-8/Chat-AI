import { createContext, useState } from "react";
import runChat from "../config/Hepha";


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");



    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)

       const response = await runChat(input)
       setResultData(response)
         setLoading(false)
         setInput("")
    }

    //   onSent("where is sweden?")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        resultData,
        input,
        setInput,
        showResult,
        setShowResult,
        setLoading,
        setResultData,
        

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider