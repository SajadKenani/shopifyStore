import {finishedName, finishedPrice, finishedImage, finishedPeriod, finishedAvailable} from "../addedCard/addedCard";
import { PurchesedNumber,  number, inPurchased} from "../cardContent/card";
import HeadsetImage from "./images/headphone-transparent-background.png";
import LaptopImage from "./images/RWUphA.png";
import MouseImage from "./images/41GSkwIhASL._AC_UF894,1000_QL80_.jpg";
import KeyboardImage from "./images/keynoard.jpg";
import TVimages from "./images/tv-flat.jpg";
import ComputerImage from "./images/computer.jpg";
import MobileImage from "./images/mobile.jpg";
import ChargerImage from "./images/charger.jpg";
import MousePadImage from "./images/MousePad.jpg";
import MonitorImage from "./images/Monitor.webp";
import HeadPhonesImage from "./images/HeadPhones.jpg";
import AripodImage from "./images/airpods.png";

// Saving the values in the Local Storage...

if(finishedName !== ""){
localStorage.setItem("finalName", finishedName === null ?  "": finishedName.toString())
}
if(finishedPrice !== ""){
localStorage.setItem("finalPrice", finishedPrice === null ?  "": finishedPrice.toString())
}
if(finishedImage !== ""){
localStorage.setItem("finalImage", finishedImage === null ?  "": finishedImage.toString())
}
if(finishedAvailable !== ""){
localStorage.setItem("finalAvaliable", finishedAvailable === null  ?  "" : finishedAvailable.toString())
}

//Setting the values that we got them from importing
let leftInStock = Number(PurchesedNumber)
let Id = Number(number)  

//Making things strict
type myData = {
    name: String|undefined,
    price: String|undefined,
    priceMarginTop: String,
    priceMarginBottom: String,
    image: String|undefined,
    imageWidth: String,
    imageHeight: String,
    imageMarginBottom: String,
    period: String, //in months,
    inStock: string|undefined,
    isPurchased: string,
    purchasedOnes: string
}

// Data's Information
const data:myData[] = [
{ 
    name: "Headset",
    price: '100',
    priceMarginTop: '150',
    priceMarginBottom: '-160',

    // Got it from importing 
    image: HeadsetImage,

    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '6', //in months,

    // Saving the values into the Local Storage if the were defined
    inStock: JSON.stringify(localStorage.getItem("finalID0")).split('"')[1] === undefined ?  "17" : 
    JSON.stringify(localStorage.getItem("finalID0")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased0")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased0")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes0")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes0")).split('"')[1],
},
{ 
    name: "Laptop",
    price: '1000',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: LaptopImage,
    imageWidth: '140',
    imageHeight: '90',
    imageMarginBottom: '-100',
    period: '36', //in months,
    inStock: JSON.stringify(localStorage.getItem("finalID1")).split('"')[1] === undefined ?  "5" :
    JSON.stringify(localStorage.getItem("finalID1")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased1")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased1")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes1")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes1")).split('"')[1],
},

{ 
    name: "Mouse",
    price: '70',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: MouseImage,
    imageWidth: '140',
    imageHeight: '100',
    imageMarginBottom: '-100',
    period: '8', //in months,
    inStock: JSON.stringify(localStorage.getItem("finalID2")).split('"')[1] === undefined ?  "10" :
    JSON.stringify(localStorage.getItem("finalID2")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased2")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased2")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes2")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes2")).split('"')[1],
},
{ 
    name: "Keyboard",
    price: '30',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: KeyboardImage,
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '12', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID3")).split('"')[1] === undefined ?  "2" :
    JSON.stringify(localStorage.getItem("finalID3")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased3")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased3")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes3")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes3")).split('"')[1],
},
{ 
    name: "TV",
    price: '500',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: TVimages,
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '32', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID4")).split('"')[1] === undefined ?  "10" :
    JSON.stringify(localStorage.getItem("finalID4")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased4")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased4")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes4")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes4")).split('"')[1],
},
{ 
    name: "Computer",
    price: '2000',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: ComputerImage,
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-110',
    period: '13', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID5")).split('"')[1] === undefined ?  "2" :
    JSON.stringify(localStorage.getItem("finalID5")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased5")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased5")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes5")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes5")).split('"')[1],
},
{ 
    name: "Mobile",
    price: '900',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: MobileImage,
    imageWidth: '90',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '1', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID6")).split('"')[1] === undefined ?  "0" :
    JSON.stringify(localStorage.getItem("finalID6")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased6")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased6")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes6")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes6")).split('"')[1],
},
{ 
    name: "Charger",
    price: '10',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: ChargerImage,
    imageWidth: '120',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '23', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID7")).split('"')[1] === undefined ?  "14" :
    JSON.stringify(localStorage.getItem("finalID7")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased7")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased7")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes7")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes7")).split('"')[1],
},
{ 
    name: "Mouse Pad",
    price: '5',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: MousePadImage,
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '3', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID8")).split('"')[1] === undefined ?  "12" :
    JSON.stringify(localStorage.getItem("finalID8")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased8")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased8")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes8")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes8")).split('"')[1],
},
{ 
    name: "Monitor",
    price: '400',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: MonitorImage,
    imageWidth: '130',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '17', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID9")).split('"')[1] === undefined ?  "7" :
    JSON.stringify(localStorage.getItem("finalID9")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased9")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased9")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes9")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes9")).split('"')[1],
},
{ 
    name: "Headphones",
    price: '30',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: HeadPhonesImage,
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '12', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID10")).split('"')[1] === undefined ?  "8" :
    JSON.stringify(localStorage.getItem("finalID10")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased10")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased10")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes10")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes10")).split('"')[1],
},
{ 
    name: "Airpods",
    price: '200',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: AripodImage,
    imageWidth: '140',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '2', //in months
    inStock: JSON.stringify(localStorage.getItem("finalID11")).split('"')[1] === undefined ?  "1" :
    JSON.stringify(localStorage.getItem("finalID11")).split('"')[1],
    isPurchased: JSON.stringify(localStorage.getItem("isPurchased11")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("isPurchased11")).split('"')[1],
    purchasedOnes: JSON.stringify(localStorage.getItem("purchasedOnes11")).split('"')[1] === undefined ?  "0" : 
    JSON.stringify(localStorage.getItem("purchasedOnes11")).split('"')[1],
},  
]
let myImportedData = ():myData[] => {
    // To add the new products that were added from "add page"
    let myArray:myData[] = []
    // Iterate between the new products
    for(let i = 0; i < (finalName?.split(",").slice(1)?.length === undefined ? 1 : finalName?.split(",").slice(1)?.length); i++)
    //Adding the new products to the Data...
     (myArray.push({
        
        name: finalName?.split(",").slice(1)[i] !== undefined ? finalName?.split(",").slice(1)[i] : '',
        price: finalPrice?.split(",").slice(1)[i] !== undefined ? finalPrice?.split(',').slice(1)[i] : '',
        priceMarginTop: '150',
        priceMarginBottom: '-160',
        image: finalImage?.split(",").slice(1)[i] !== undefined ? finalImage?.split(',').slice(1)[i] : '',
        imageWidth: '140',
        imageHeight: '120',
        imageMarginBottom: '-100',
        period: finishedPeriod !== null ? finishedPeriod : '0',

        inStock: JSON.stringify(localStorage.getItem(`finalID${data.length+i}`)).split('"')[1] === undefined ?  (finalAvaliable?.split(",")[i+1]) :
        JSON.stringify(localStorage.getItem(`finalID${data.length+i}`)).split('"')[1],

        isPurchased: JSON.stringify(localStorage.getItem(`isPurchased${data.length+i}`)).split('"')[i] === undefined ?  "0" : 
        JSON.stringify(localStorage.getItem(`isPurchased${data.length+i}`)).split('"')[1],

        purchasedOnes: JSON.stringify(localStorage.getItem(`purchasedOnes${data.length+1}`)).split('"')[i] === undefined ?  "0" : 
        JSON.stringify(localStorage.getItem(`purchasedOnes${data.length+i}`)).split('"')[1],
})
)
return myArray
}

let myFinalPrice:number = Number(localStorage.getItem("myFinalPrice"))

//exporting the information to added card page

/* the variables in "added card" keep getting the old values and then add the new ones with them, 
and then they come back to this script and this script exporing to the "middle page" and "added card" and it keeps looping like that */
export const finalName = localStorage.getItem("finalName");
export const finalPrice = localStorage.getItem("finalPrice");
export const finalImage = localStorage.getItem("finalImage");
export const finalAvaliable = localStorage.getItem("finalAvaliable");


const Data = data.concat(myImportedData());

let finalID = Number(Data[Id].inStock) - leftInStock;

Data[Id].inStock = finalID.toString();

for (let i=0; i <= Data.length; i++){
    if(Data[Id] === Data[i]){
        if (JSON.stringify(inPurchased).split('"')[1] === "1") {
        Data[Id].isPurchased = "1";
        let myNumber = leftInStock + Number(localStorage.getItem(`purchasedOnes${i}`))
        Data[Id].purchasedOnes = (myNumber).toString()
           
        if(Number(Data[Id]) > (data.length)){
        localStorage.setItem(`finalID${i + 1}`, (finalAvaliable?.split(",")[i+1]) === undefined ? "0" : (finalAvaliable?.split(",")[i+1]));
        localStorage.setItem(`isPurchased${i + 1}`, Data[Id].isPurchased)
        localStorage.setItem(`purchasedOnes${i + 1}`, Data[Id].purchasedOnes)
        }else{
            localStorage.setItem(`isPurchased${i}`, Data[Id].isPurchased)
            localStorage.setItem(`purchasedOnes${i}`, Data[Id].purchasedOnes)
            localStorage.setItem(`finalID${i}`, JSON.stringify(Data[Id].inStock).split('"')[1]);
        }
    }
    if(Data[Id] === Data[i] && JSON.stringify(inPurchased).split('"')[1] === "1"){   
        myFinalPrice += Number(Data[i].price)
        localStorage.setItem("myFinalPrice", myFinalPrice.toString())
    }
}
}
export const theFinalData = Data;
export const theFinalNumber = localStorage.getItem("finalNumber")
export const theFinalPrice = localStorage.getItem("myFinalPrice")
export const finalSum = Number(localStorage.getItem("sumation"))
