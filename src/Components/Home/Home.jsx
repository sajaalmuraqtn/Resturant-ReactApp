import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

export default function Home() {
  let [pizza, setPizza] = useState([]);
  let getPizza = async () => {
    let { data } = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
    setPizza(data.recipes);
  }
  useEffect(() => {
    getPizza()
  }, [])
  return (
    <div className='row text-center pt-2'>
      {
        pizza.length > 0 ?

          pizza.map(
            (ele) => {
              return <div className='col-md-4 mb-1'>

                <img src={ele.image_url} alt="ele" height={'200px'} width={'200px'} />
              </div>
            }
          ) : <Loading />
      }
    </div>
  )
}
