import "./card.css";
import {myArray} from "../middleContent/middle"


export const Card = () => {
    if(myArray[0] != 0){

    const myArrOne = JSON.stringify(myArray[0])
    localStorage.setItem("myArrOne", myArrOne);

    const myArrTwo = JSON.stringify(myArray[1])
    localStorage.setItem("myArrTwo", myArrTwo);

    const myArrThree = JSON.stringify(myArray[2])
    localStorage.setItem("myArrThree", myArrThree);

    const myArrFour = JSON.stringify(myArray[3])
    localStorage.setItem("myArrFour", myArrFour);

    const myArrFive = JSON.stringify(myArray[4])
    localStorage.setItem("myArrFive", myArrFive);
    }

    const name = (JSON.stringify(localStorage.getItem("myArrOne"))).split(`"`)[2]
    const named = name.substring(0, name.length - 1)
    const price = JSON.stringify(localStorage.getItem("myArrTwo")).split(`"`)[2]
    const priced = price.substring(0, price.length - 1)
    const image = JSON.stringify(localStorage.getItem("myArrThree")).split(`"`)[2];
    const imaged = image.substring(0, image.length - 1)

return (
    <div className="myOuterDiv-div">
        <div className="myInnterDiv-div">
        <img className="cardImage-img" src={`${imaged}`}/>
        <div className="myPara-para">Name: {named}</div>
        <div className="myPara-para">Price: {priced}$</div>
        <button className="myButton" onClick={() => console.log(image)}>Buy: {priced}$</button>
        </div>
      
    </div>
    )
}
