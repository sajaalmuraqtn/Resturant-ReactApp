import React, { createContext, useContext } from 'react'

export const PizzaContext=createContext();

export default function pizzaContextProvider({children}) {


  return (
    <PizzaContext.Provider>
        {children}
    </PizzaContext.Provider>
  )
}
