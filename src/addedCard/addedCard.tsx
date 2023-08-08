import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "../addedCard/addedCard.css"
import * as yup from "yup"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { finalPrice, finalName, finalImage, finalAvaliable, finalDescription } from "../middleContent/data";

const schema = yup.object().shape({
    
name: yup.string().required("This field is required."),
price: yup.number().required("This field is required."), 
picture: yup.string().required ("This field is required."),
avaliable: yup.string().required("This field is required."),
description: yup.string().required("This field is required."),
})

export const AddedCard = () => { 
const navigate = useNavigate();

const [name, setname] = useState([""]);
const [price, setprice] = useState([""]);
const [image, setimage] = useState([""]);
const [avaliable, setavaliable] = useState([""]);
const [description, setdescription] = useState([""]);

const {  register, handleSubmit, formState: { errors} } = useForm({ 
resolver: yupResolver(schema),

});

// To Display all the info in one array, and then spliting them in "data" script and then iterate between them and add all of them. 
// It keeps looping like that.
const gottenName = (event: React.FormEvent<HTMLInputElement>) => {
    setname([...[finalName === null ? "": finalName?.toString()], event.currentTarget.value])
}
const gottenPrice = (event: React.FormEvent<HTMLInputElement>) => {
    setprice([...[finalPrice === null ? "": finalPrice?.toString()], event.currentTarget.value])
}
const gottenImage = (event: React.FormEvent<HTMLInputElement>) => {
    setimage([...[finalImage === null ? "": finalImage?.toString()], event.currentTarget.value])
}
const gottenAvailablility = (event: React.FormEvent<HTMLInputElement>) => {
    setavaliable([...[finalAvaliable === null ? "": finalAvaliable?.toString()], event.currentTarget.value])
}
const gottenDescription = (event: any) => {
    setdescription([...[finalDescription === null ? "": finalDescription?.toString() + "#"], event.currentTarget.value])
} 
const submitHandler = () => {
// To go to the main page
navigate("/")

// reloading the page so the new changes being displayed
window.location.reload();

// setting the values to send them to "data" Script 
localStorage.setItem("name", name.toString())
localStorage.setItem("price", price.toString())
localStorage.setItem("image", image.toString())
localStorage.setItem("avaliable", avaliable.toString())
localStorage.setItem("description", description.toString())
localStorage.setItem("period", "0.1")

}

return(
    
<form className="myForm" onSubmit={handleSubmit(submitHandler)}>

<div style={{justifySelf:"center"}}>
<h1 className="myMainPara-para">Add Your Product!</h1>
</div>

<div className="myOuterDiv" >
<div className="myInnerDiv" >

<p className="paragraph-para">Product's Name:</p> 
{/* Input... */}
<input {...register("name")} className="inputBar-src" placeholder={"Name..."} required onChange={gottenName}/>
{/* Styling and Displaying the error message... */}
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}>
{errors.name?.message?.toString()}</p> 

<p className="paragraph-para">Product's Price:</p>
<input {...register("price")} className="inputBar-src" placeholder={"Price..."} required onChange={gottenPrice}/>
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}> 
{errors.price?.message?.toString()}</p> 

<p className="paragraph-para">Product's Availability:</p>
<input {...register("avaliable")} className="inputBar-src" placeholder="How many are available..." required onChange={gottenAvailablility}/> 
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}> 
{errors.avaliable?.message?.toString()}</p>

<p className="paragraph-para">Product's Picture:</p>
<input {...register("picture")} className="inputBar-src" placeholder="A link of your product's image..." required onChange={gottenImage}/> 
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}> 
{errors.picture?.message?.toString()}</p>
</div>

<div className="mySecondaryDiv">
<p className="paragraph-para">Product's Description:</p>
<textarea {...register("description")} className="DescriptioninputBar-src" placeholder="Describe your product..." required onChange={gottenDescription}/> 
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -100+"px", color: "rgb(180, 28, 28)"}}> 
{errors.picture?.message?.toString()}</p>

<div style={{display:"flex", marginTop:100+"px"}}>
<button type="submit" className="theButton">Post!</button>
<button onClick={() =>navigate("/")} className="theButton">Cancel</button>
</div>

</div>
{/* The Submit Button, the submitting function is in the "Form" tag */}
</div>


</form>
)
}

// Exporing the values to "data" Script.
export const finishedName = localStorage.getItem("name");
export const finishedPrice = localStorage.getItem("price");
export const finishedImage = localStorage.getItem("image");
export const finishedPeriod =  localStorage.getItem("period")
export const finishedDescription = localStorage.getItem("description")
export const finishedAvailable = localStorage.getItem("avaliable")


