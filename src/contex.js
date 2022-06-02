import React, { createContext, useState } from "react";
import { useApolloClient } from '@apollo/client'

const AppContext = createContext(null);

const AppProvider = (props) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })

    const client = useApolloClient()


    const activateAuth = (token) => {
        setIsAuth(true)
        sessionStorage.setItem('token', token)

    }

    const removeAuth = () => {
        setIsAuth(false)
        sessionStorage.removeItem('token')
        client.resetStore()
    }

    const value = {
        isAuth,
        activateAuth,
        removeAuth
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {
    AppContext, AppProvider
}