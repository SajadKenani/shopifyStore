import "./card.css";
import {myArray} from "../middleContent/middle"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Card = () => {
const navigate = useNavigate()
    if(myArray[0] != 0){
        // getting the values from "middle page" to local storage
    localStorage.setItem("myArrOne", myArray[0].toString());
    localStorage.setItem("myArrTwo", myArray[1].toString());
    localStorage.setItem("myArrThree", myArray[2].toString());
    localStorage.setItem("myArrFour", myArray[3].toString());
    localStorage.setItem("myArrSix", myArray[4].toString());
    localStorage.setItem("theNumber", myArray[5].toString()); 
    }
    // setting the values from "middle page" to local storage
    const name = JSON.stringify(localStorage.getItem("myArrOne")).split(`"`)[1]
    const named = name.substring(0, name.length)
    const price = JSON.stringify(localStorage.getItem("myArrTwo")).split(`"`)[1]
    const priced = Number(price.substring(0, price.length))
    const image = JSON.stringify(localStorage.getItem("myArrThree")).split(`"`)[1];
    const imaged = image.substring(0, image.length)
    const inStock = JSON.stringify(localStorage.getItem("myArrSix")).split(`"`)[1];
    let inStocked = Number(inStock.substring(0, inStock.length))

    // setting "myStock" to "1" if the products are avaliable or to "0" if they are not.
    let[myStock, usemystock] = useState(inStocked === 0 ? 0 : 1)

    // the left and right arrows that increase and decrease the count of the products 
    const reducingTheStock = () => { if(myStock > 1){ usemystock(myStock - 1) } }
    const upducingTheStock = () => { if(myStock < inStocked){usemystock(myStock + 1) }}

    // to go back to the main page and display the new changes on the main page
    const goBack = () => {
    navigate("/")
    window.location.reload();}
    const [isPurchesed, useisPurchesed] = useState(false);
    const result = myStock * priced;

    const isBuying = () => {
        useisPurchesed(true)
        // the product is going to show up if "isPurchased" is equil to "1"
        localStorage.setItem("isPurchased", "1")
        localStorage.setItem("purchesed", myStock.toString())
    }

return (
    <div className="myOuterDiv-div">
     <div className="tweakingDiv-div">
        <div className="myInnterDiv-div">
        <img className="cardImage-img" src={`${imaged}`}/>  
        <div className="myVeryInnerDiv-div">
        <div className="myPara-para">{named}</div>
        <div className="myPara-para">Price: {priced}$</div>
        <div className="adjustArrows-div">

        {/* To check if products are available */}
        {myStock === 0 && isPurchesed === false ? <button className="myUnAvailableButton" onClick={goBack}>Not Available: Go Back</button> :
        isPurchesed === false &&
        <div style={{display: "flex"}}>

        {/* The left arrow that decrease the count */}
        <button onClick={reducingTheStock} className="arrowButton-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M20 0H0v20h20zm-7.354 14.166-1.389 1.439-5.737-5.529 5.729-5.657 1.4 1.424-4.267 4.215z"/></svg></button>

        <button className="myButton" onClick={isBuying}>{myStock} Buy: {result}$</button>

        {/* The right arrow that increase the count */}
        <button onClick={upducingTheStock} className="arrowButton-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M20 0H0v20h20zM7.658 15.707l-1.414-1.414L10.537 10 6.244 5.707l1.414-1.414L13.365 10z"/></svg></button>
        </div>}  

        {/* To check if you successfuly bought the product */}
        {isPurchesed === true  && <button className="myButton" onClick={goBack}>Go Back</button>}
        {isPurchesed && <p > {myStock} added to your cart. </p>}

        {/* The Description*/}
        <p className="description-para">Description: The new Sennheiser MB Pro 2 UC ML Bluetooth Headset is a premium Bluetooth headset with a comfortable over-the-head-design.</p>   
        </div>
        </div>
    </div>
</div>
</div>
)
}

//Sending values to "Data" Script...
export const PurchesedNumber = localStorage.getItem("purchesed")
export const number = localStorage.getItem("theNumber")
export const inPurchased = localStorage.getItem("isPurchased") 

localStorage.setItem("purchesed", "0") 
localStorage.setItem("isPurchased", "0")
