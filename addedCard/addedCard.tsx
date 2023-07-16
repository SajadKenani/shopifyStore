import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "../addedCard/addedCard.css"
import * as yup from "yup"; 
import { Link } from "react-router-dom";


const schema = yup.object().shape({

name: yup.string().required("This field is required."),
price: yup.number().required("This field is required."), 
picture: yup.string().required ("This field is required."),

})
let myData = [""] 

const onSubmitHandler = (data: object) => {
    
    myData = Object.values(data);
    myData.push("1")
    console.log(myData)
    myData.push("fds")
    }
    
    
export const myFinalData = myData;


export const AddedCard = () => { 
const {  register, handleSubmit, formState: { errors}, reset } = useForm({ 
resolver: yupResolver(schema),
});

return(

<form className="myForm" onSubmit={handleSubmit(() => onSubmitHandler)}>

<h2 >Your Product's Info.</h2>

<p className="paragraph-para">Product's Name:</p> 
<input {...register("name")} className="searchBar-src" placeholder={"Name..."} required/>
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}>
    {errors.name?.message?.toString()}</p> 

<p className="paragraph-para">Product's Price:</p>
<input {...register("price")} className="searchBar-src" placeholder={"Price..."} required/>
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -20+"px", color: "rgb(180, 28, 28)"}}> 
{errors.price?.message?.toString()}</p> 

<p className="paragraph-para">A link of your product's picture:</p>
<input {...register("picture")} className="searchBar-src" placeholder="Picture..." required/> 
<p style={{marginTop: -15+"px", marginLeft: 10+"px",marginBottom: -100+"px", color: "rgb(180, 28, 28)"}}> 
{errors.picture?.message?.toString()}</p>

<button className="btn btn-primary myButton" 
style={{backgroundColor: "rgb(48, 134, 248)", color: "white", borderColor: "white"}} onClick={() => onSubmitHandler}><Link to={"/"}>Post!</Link></button>

</form>
)
}
