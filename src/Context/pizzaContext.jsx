import React, { createContext, useState } from 'react'
import axios from 'axios'

export const PizzaContext=createContext('');

export default function PizzaContextProvider({children}) {
  const [pizza, setPizza] = useState([]);
  const [subPizza, setSubPizza] = useState({});
  
  async function getPizza(){ 
    try {
     let{data}= await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
     setPizza(data.recipes);
     console.log(pizza);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSubPizza(id){
    console.log(id);
    try {
      let {data}= await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
      console.log(data);
      setSubPizza(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PizzaContext.Provider value={{getPizza,pizza,getSubPizza,subPizza}}>
        {children}
    </PizzaContext.Provider>
  )
}
