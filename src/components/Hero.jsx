import React from 'react'
import "../components/css/hero.css"
import{pizzaData} from "./data"

const Hero = () => {
  return (
  <>
    <ul className="pizzas">
    {pizzaData.map((pizzaCard,index) => (
        <li keys={index} className={`pizza ${pizzaCard.soldOut ? "sold-out": ""}`}>
            <img src={pizzaCard.photoName}alt="" />
            <div className="pizza">
                <h3>{pizzaCard.name}</h3>
                <p>{pizzaCard.ingredients}</p>
                <h3>
                    <span>{pizzaCard.soldOut ? "SOLD OUT": pizzaCard.price}</span>
                </h3>
            </div>
        </li>
    ))}
</ul>
    </>
  )
}

export default Hero