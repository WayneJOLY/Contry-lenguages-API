import React from 'react'
import '../App.css'
const ContryCard = ({contry}) => {
  return (
    <article className='main'>
        <div className='flag'>
            <img src={contry.flags.svg} alt={contry.name.common} />
            <h2>{contry.name.common}</h2>
        </div>
        <div>
            <ul>
                <li><span>capital :</span> {contry.capital}</li>
                <li><span>poblacion :</span> {contry.population}</li>
                <li><span>superficie :</span>{contry.area} <span>km <sup>2</sup></span> </li>
                <li><span>continente :</span>{contry.continents}</li>
                <li><span>zona :</span>{contry.subregion}</li>
            </ul>
        </div>
    </article>
  )
}

export default ContryCard
