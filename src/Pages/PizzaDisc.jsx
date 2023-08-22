import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PizzaContext } from '../Context/pizzaContext.jsx';

export default function PizzaDisc() {
  let {id}=useParams();
  let {getSubPizza,subPizza}=useContext(PizzaContext);
  useEffect(()=>{
     getSubPizza(id);
  },[])
  return (
    <>
    <img src={subPizza?.recipe?.image_url} alt={subPizza.recipe?.title} />
      <h1>{subPizza.recipe?.title}</h1>
      <ul>
         {
            subPizza.recipe?.ingredients?.map((ele)=>{
              return <li>{ele}</li>
            })
         }
      </ul>
    </>
  )
}
