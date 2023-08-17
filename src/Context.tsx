import React, { useState, createContext } from "react";

export type GameID = {
    game: string
}

type ContextType = {
    currgame: string
    setCurrGame: React.Dispatch<React.SetStateAction< string>>
}

const defaultState = {
    currgame: "",
    setCurrGame: () => {}

}
type UserContextProviderProps = {

    children: React.ReactNode
}

export const CurrentGame = createContext<ContextType>(defaultState)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [currgame, setCurrGame] = useState< string>("")

    return (
        <CurrentGame.Provider value={{currgame, setCurrGame}}>
        {children}
        </CurrentGame.Provider>
        )
}