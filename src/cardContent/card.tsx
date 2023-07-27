import "./card.css";
import {myArray} from "../middleContent/middle"
import { useState } from "react";


export const Card = () => {

    if(myArray[0] != 0){
    localStorage.setItem("myArrOne", myArray[0].toString());
    localStorage.setItem("myArrTwo", myArray[1].toString());
    localStorage.setItem("myArrThree", myArray[2].toString());
    localStorage.setItem("myArrFour", myArray[3].toString());
    localStorage.setItem("myArrSix", myArray[4].toString());
    localStorage.setItem("theNumber", myArray[5].toString()); 
    }

    const name = (JSON.stringify(localStorage.getItem("myArrOne"))).split(`"`)[1]
    const named = name.substring(0, name.length)
    const price = JSON.stringify(localStorage.getItem("myArrTwo")).split(`"`)[1]
    const priced = Number(price.substring(0, price.length))
    const image = JSON.stringify(localStorage.getItem("myArrThree")).split(`"`)[1];
    const imaged = image.substring(0, image.length)
    const inStock = JSON.stringify(localStorage.getItem("myArrSix")).split(`"`)[1];
    let inStocked = Number(inStock.substring(0, inStock.length))

    let[myStock, usemystock] = useState(inStocked === 0 ? 0 : 1)

    const reducingTheStock = () => { if(myStock > 1){ usemystock(myStock - 1) } }
    const upducingTheStock = () => { if(myStock < inStocked){usemystock(myStock + 1) }}
    const [isPurchesed, useisPurchesed] = useState(false);
    const result = myStock * priced;

    const isBuying = () => {
        useisPurchesed(true)
        localStorage.setItem("purchesed", myStock.toString())
    }
return (
    <div className="myOuterDiv-div">
        <div className="myInnterDiv-div">
        <img className="cardImage-img" src={`${imaged}`}/>
        <div className="myPara-para">Name: {named}</div>
        <div className="myPara-para">Price: {priced}$</div>
        
        <div className="adjustArrows-div">
        <button onClick={reducingTheStock} className="arrowButton-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M20 0H0v20h20zm-7.354 14.166-1.389 1.439-5.737-5.529 5.729-5.657 1.4 1.424-4.267 4.215z"/></svg></button>
        {myStock === 0 ? <button className="myButton">Not Available</button> : 
        <button className="myButton" onClick={isBuying}>{myStock} Buy: {result}$</button>}
        <button onClick={upducingTheStock} className="arrowButton-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M20 0H0v20h20zM7.658 15.707l-1.414-1.414L10.537 10 6.244 5.707l1.414-1.414L13.365 10z"/></svg></button>
        </div>
        {isPurchesed && <p>You bought {myStock} of this product.</p>}
    </div>
    </div>
    )
}

export const PurchesedNumber = localStorage.getItem("purchesed")
export const number = localStorage.getItem("theNumber")
