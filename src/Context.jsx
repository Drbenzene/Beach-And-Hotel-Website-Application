import  React from "react"

const GlobalContext = React.createContext();

const Provider = (props) => {


    const states = {

    }
    return (
        <GlobalContext.Provider value={states} >
            {props.children}
        </GlobalContext.Provider>
    )
}

const Consumer = GlobalContext.Consumer

export { GlobalContext, Provider, Consumer };