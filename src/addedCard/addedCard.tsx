import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "../addedCard/addedCard.css"
import * as yup from "yup"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { finalPrice, finalName, finalImage } from "../middleContent/data";

const schema = yup.object().shape({

name: yup.string().required("This field is required."),
price: yup.number().required("This field is required."), 
picture: yup.string().required ("This field is required."),

})

export const AddedCard = () => { 
const navigate = useNavigate()
const [name, setname] = useState([""])
const [price, setprice] = useState([""])
const [image, setimage] = useState([""])
const {  register, handleSubmit, formState: { errors}, reset } = useForm({ 
resolver: yupResolver(schema),

});

const gottenName = (event: React.FormEvent<HTMLInputElement>) => {
    setname([...[finalName === null ? "": finalName?.toString()], event.currentTarget.value])
}
const gottenPrice = (event: React.FormEvent<HTMLInputElement>) => {
    setprice([...[finalPrice === null ? "": finalPrice?.toString()], event.currentTarget.value])
}
const gottenImage = (event: React.FormEvent<HTMLInputElement>) => {
    setimage([...[finalImage === null ? "": finalImage?.toString()], event.currentTarget.value])
}
const submitHandler = () => {
navigate("/")
window.location.reload();
localStorage.setItem("name", name.toString())
localStorage.setItem("price", price.toString())
localStorage.setItem("image", image.toString())
localStorage.setItem("period", "0.1")
}

return(

<form className="myForm" onSubmit={handleSubmit(submitHandler)}>
<h2 >Your Product's Info.</h2>

<p className="paragraph-para">Product's Name:</p> 
<input {...register("name")} className="searchBar-src" placeholder={"Name..."} required onChange={gottenName}/>
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}>
{errors.name?.message?.toString()}</p> 

<p className="paragraph-para">Product's Price:</p>
<input {...register("price")} className="searchBar-src" placeholder={"Price..."} required onChange={gottenPrice}/>
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}> 
{errors.price?.message?.toString()}</p> 

<p className="paragraph-para">A link of your product's picture:</p>
<input {...register("picture")} className="searchBar-src" placeholder="Picture..." required onChange={gottenImage}/> 
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -100+"px", color: "rgb(180, 28, 28)"}}> 
{errors.picture?.message?.toString()}</p>

<button type="submit" className="btn btn-primary myButton"
style={{backgroundColor: "rgb(48, 134, 248)", color: "white", borderColor: "white"}}>Post!</button>
</form>
)
}

export const finishedName = localStorage.getItem("name");
export const finishedPrice = localStorage.getItem("price");
export const finishedImage = localStorage.getItem("image");
export const finishedPeriod =  localStorage.getItem("period")