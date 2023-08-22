import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PizzaContext } from '../Context/pizzaContext';

export default function Home() {
  const navigate=useNavigate();
  let {getPizza}=useContext(PizzaContext);
  let{pizza}=useContext(PizzaContext);
  useEffect(()=>{
    getPizza();
  },[])
  return (
    <div className='row container'>
     {
           pizza.length==0? '':
           pizza.map(
            (ele)=>{
            return  <div className='col-md-3'>
              <img src={ele.image_url}alt="pizza" width={200} height={200}/>
              <h3>{ele.title}</h3>
             <button className='btn btn-dark' onClick={()=>navigate(`/pizzaInfo/${ele.recipe_id}`)} >More</button> 
            </div>
           }
           )

     }
    
    </div>
  )
}
