import {finishedName, finishedPrice, finishedImage, finishedPeriod, finishedAvailable, finishedDescription} from "../addedCard/addedCard";
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
if(finishedDescription !== ""){
localStorage.setItem("finalDescription", finishedDescription === null ?  "": (finishedDescription).toString())
}
if(finishedAvailable !== ""){
localStorage.setItem("finalAvaliable", finishedAvailable === null  ?  "" : finishedAvailable.toString())
}

//Setting the values that we got them from importing
let leftInStock = Number(PurchesedNumber)
let Id = Number(number)  

//Making things strict
type myData = {
    Id: Number,
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
    purchasedOnes: string,
    description: string,
}

// Data's Information
const data:myData[] = [
{ 
    Id:0,
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
    description: "Unleash the Power of Sound with our Premium Headset - Crystal-clear audio, comfortable design, and versatile compatibility for an immersive experience like no other. Upgrade your audio game today!",
},
{ 
    Id:1,
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
    description: "Unleash Your Potential with our Cutting-Edge Laptop - Power-packed performance, stunning display, and sleek portability to fuel your productivity and creativity. Elevate your digital lifestyle today!",
},

{ 
    Id:2,
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
    description: "Navigate with Precision using our High-Performance PC Mouse - Responsive, ergonomic, and customizable for seamless productivity and gaming. Upgrade your computing experience today!",
},
{ 
    Id:3,
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
    description: "Elevate Your Typing Experience with our Premium Keyboard - Responsive keys, ergonomic design, and customizable features for seamless productivity and gaming. Level up your typing game now!",
},
{ 
    Id:4,
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
    description: "Transform Your Entertainment with our High-Definition TV - Crisp visuals, immersive sound, and smart features for an unparalleled viewing experience. Elevate your home entertainment now!",
},
{ 
    Id:5,
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
    description: "Unlock Limitless Possibilities with our Cutting-Edge Computer - Blazing-fast performance, sleek design, and versatile functionality to redefine your digital world. Upgrade to the future of computing today!",
},
{ 
    Id:6,
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
    description: "Stay Connected in Style with our Sleek Mobile - Powerful performance, stunning display, and top-notch camera for capturing memories in high definition. Embrace the freedom of mobility today!",
},
{ 
    Id:7,
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
    description: "Revitalize Your Devices with our Reliable Mobile Charger - Robust, efficient, and compatible with various devices, ensuring your gadgets stay charged and ready for action. Experience uninterrupted power at home or the office!",
},
{ 
    Id:8,
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
    description: "Enhance Your Precision with our Gaming-Grade Mouse Pad - Smooth surface, anti-slip base, and optimal size for precise movements and maximum gaming performance. Level up your gaming experience now!",
},
{ 
    Id:9,
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
    description: "Immerse Yourself in Brilliance with our High-Definition PC Monitor - Crisp visuals, vibrant colors, and sleek design for an unmatched viewing experience. Upgrade your display today!",
},
{ 
    Id:10,
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
    description: "Experience Audio Bliss with our High-Quality Headphones - Superior sound, sleek design, and all-day comfort for an unmatched listening journey. Get lost in your favorite tunes like never before!",
},
{ 
    Id:11,
    name: "AirPods",
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
    description: "Experience Wireless Freedom with AirPods - Seamless connectivity, crystal-clear sound, and effortless charging in a sleek, compact design. Elevate your audio journey now!",
},  
]

let myImportedData = ():myData[] => {
    // To add the new products that were added from "add page"
    let myArray:myData[] = []
    // Iterate between the new products
    for(let i = 0; i < (finalName?.split(",").slice(1)?.length === undefined ? 1 : finalName?.split(",").slice(1)?.length); i++)
    //Adding the new products to the Data...
     (myArray.push({
        Id: data.length + i,
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

        // need to solve a problem about spliting the string into arrays the "," is ruining the process.
        description: finishedDescription?.split('#').slice(1)[i] !== undefined ? 
        finishedDescription?.split('#').slice(1)[i].substring(1) : '',
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
export const finalDescription = localStorage.getItem("finalDescription");
export const finalAvaliable = localStorage.getItem("finalAvaliable");

// Sending the data to the middle page 
const Data = data.concat(myImportedData());

// to get the ne value of Stock "the value of availability"
let finalID = Number(Data[Id].inStock) - leftInStock;

// Converting the number into a string and inserting the finial value in the main data
Data[Id].inStock = finalID.toString();

// looping through the items in data
for (let i=0; i <= Data.length; i++){

    // getting the one that the user selected it to buy it...
    if(Data[Id] === Data[i]){

        //cheking if the item is already purchased...
        if (JSON.stringify(inPurchased).split('"')[1] === "1") {

        // to set the item as bought...    
        Data[Id].isPurchased = "1";
        let myNumber = leftInStock + Number(localStorage.getItem(`purchasedOnes${i}`))
        Data[Id].purchasedOnes = (myNumber).toString()
           
        // To check if it's dealing with the new item that the used added...
        if(Number(Data[Id]) > (data.length)){
            // Saving the values of the added item...
        localStorage.setItem(`finalID${i + 1}`, (finalAvaliable?.split(",")[i+1]) === undefined ? "0" : (finalAvaliable?.split(",")[i+1]));
        localStorage.setItem(`isPurchased${i + 1}`, Data[Id].isPurchased)
        localStorage.setItem(`purchasedOnes${i + 1}`, Data[Id].purchasedOnes)
        }else{
            // To check if it's dealing with the old originals items, and also saving them...
            localStorage.setItem(`isPurchased${i}`, Data[Id].isPurchased)
            localStorage.setItem(`purchasedOnes${i}`, Data[Id].purchasedOnes)
            localStorage.setItem(`finalID${i}`, JSON.stringify(Data[Id].inStock).split('"')[1]);
        }
    }
}
}

export const theFinalData = Data;

