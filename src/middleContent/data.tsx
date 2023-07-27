import {finishedName} from "../addedCard/addedCard";
import {finishedPrice} from "../addedCard/addedCard";
import {finishedImage} from "../addedCard/addedCard";
import { finishedPeriod } from '../addedCard/addedCard';
import { PurchesedNumber,  number} from "../cardContent/card";
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
import { useState } from "react";

if(finishedName !== ""){
localStorage.setItem("finalName", finishedName === null ?  "": finishedName.toString())
}
if(finishedPrice !== ""){
localStorage.setItem("finalPrice", finishedPrice === null ?  "": finishedPrice.toString())
}
if(finishedImage !== ""){
localStorage.setItem("finalImage", finishedImage === null ?  "": finishedImage.toString())
}
const leftInStock = Number(PurchesedNumber)
const Id = Number(number)
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
    inStock: string,
}
let myImportedData = ():myData[] => {
    let myArray:myData[] = []
   for(let i = 0; i < (finalName?.split(",").slice(1)?.length === undefined ? 1 : finalName?.split(",").slice(1)?.length); i++)
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
        inStock: "3"
}))
return myArray
}

export const finalName = localStorage.getItem("finalName");
export const finalPrice = localStorage.getItem("finalPrice");
export const finalImage = localStorage.getItem("finalImage");

const data:myData[] = [
{ 
    name: "Headset",
    price: '100',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: HeadsetImage,
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '6', //in months,
    inStock: JSON.stringify(localStorage.getItem("finalID")).split('"')[1] !== null ?  "5" :JSON.stringify(localStorage.getItem("finalID")).split('"')[1],
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
    inStock: JSON.stringify(localStorage.getItem("finalID")).split('"')[1] !== null ?  "5" :JSON.stringify(localStorage.getItem("finalID")).split('"')[1],
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
    inStock: "10",
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
    inStock: "2",
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
    inStock: "10",
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
    inStock: "2",
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
    inStock: "0",
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
    inStock: "14",
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
    inStock: "12",
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
    inStock: "0",
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
    inStock: "8",
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
    inStock: "1",
},   
]
let finalID = Number(data[Id].inStock) - leftInStock
data[Id].inStock = finalID.toString()
localStorage.setItem("finalID", data[Id].inStock)
export const Data = data.concat(myImportedData());