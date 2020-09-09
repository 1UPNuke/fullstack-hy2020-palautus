import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries'

const App = () => {
    const [countries, setCountries] = useState([]);

    const low = (s) => s.toLowerCase()

    var query='';

    const getCountry = (q=query)=>{axios
      .get(`https://restcountries.eu/rest/v2/name/${q}`)
      .then(response => {
          //Filter countries that only have query in native name or name in another language
          setCountries(response.data.filter(c=>low(c.name).includes(low(q))))
      })
      .catch(e=>{
        /*if(e.response.status===404){
          setCountries([])
          return null
        }
        else{
          throw e
        }*/
      })
    }

    useEffect(getCountry, [])

    return (
        <>
            <input onChange={e=>{query=e.target.value; getCountry(query)}}/>
            <Countries list={countries} getCountry={getCountry}/>
        </>
    )
}

export default App;