import React, { useState } from 'react';
import {myFinalData} from "../addedCard/addedCard"


const name =""

if(myFinalData[0] === ""){
localStorage.setItem(name, myFinalData[0].toString());
console.log(myFinalData[0])
}




let myImportedData = {
    name: localStorage.getItem(name),
    price: myFinalData[1]?.toString(),
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: myFinalData[0]?.toString(),
    imageWidth: '140',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: "1", //in months
}

const data = [
{ 
    name: "Headset",
    price: '100',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://www.downloadclipart.net/large/headphone-transparent-background.png",
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '6' //in months,
},
{ 
    name: "Laptop",
    price: '1000',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7",
    imageWidth: '140',
    imageHeight: '90',
    imageMarginBottom: '-100',
    period: '36' //in months,
},
{ 
    name: "Mouse",
    price: '70',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://m.media-amazon.com/images/I/41GSkwIhASL._AC_UF894,1000_QL80_.jpg",
    imageWidth: '140',
    imageHeight: '100',
    imageMarginBottom: '-100',
    period: '8' //in months,
},
{ 
    name: "Keyboard",
    price: '30',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://m.media-amazon.com/images/I/71NMtTQkYUL._AC_UF894,1000_QL80_.jpg",
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '12' //in months
},
{ 
    name: "TV",
    price: '500',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://images.wisegeek.com/tv-flat.jpg",
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '32', //in months
},
{ 
    name: "Computer",
    price: '2000',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://media.istockphoto.com/id/927961530/photo/the-modern-computer.jpg?s=612x612&w=0&k=20&c=oTpuaBRqtYejGQHiWMJG4rXl8FhVEHWRIZprmXp4ZPU=",
    imageWidth: '140',
    imageHeight: '110',
    imageMarginBottom: '-110',
    period: '13', //in months
},
{ 
    name: "Mobile",
    price: '900',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://items.s1.citilink.ru/1912004_v01_b.jpg",
    imageWidth: '90',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '1', //in months
},
{ 
    name: "Charger",
    price: '10',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://m.media-amazon.com/images/I/51gFDOCj+rS._AC_UF1000,1000_QL80_.jpg",
    imageWidth: '120',
    imageHeight: '110',
    imageMarginBottom: '-100',
    period: '23', //in months
},
{ 
    name: "Mouse Pad",
    price: '5',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://m.media-amazon.com/images/I/81WQsjtppYL._AC_UF894,1000_QL80_.jpg",
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '3', //in months
},
{ 
    name: "Monitor",
    price: '400',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://i0.wp.com/itportal.co.in/wp-content/uploads/2022/11/a5-155.jpg?fit=1500%2C1500&ssl=1",
    imageWidth: '130',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '17', //in months
},
{ 
    name: "Headphones",
    price: '30',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://m.media-amazon.com/images/I/71LP40TtRHL._AC_UF894,1000_QL80_.jpg",
    imageWidth: '120',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '12', //in months
},
{ 
    name: "Airpods",
    price: '200',
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: "https://www.si.com/.image/c_fit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTg4ODk3NDA2Mjc0Nzc0NTYw/_apple-airpods-pro.png",
    imageWidth: '140',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: '2', //in months
},
{
    name: myFinalData[0],
    price: myFinalData[1],
    priceMarginTop: '150',
    priceMarginBottom: '-160',
    image: myFinalData[0],
    imageWidth: '140',
    imageHeight: '120',
    imageMarginBottom: '-100',
    period: "1", //in months
}
    
]

export const Data = data