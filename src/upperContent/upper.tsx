import "./upper.css"
import "../middleContent/middle"
import { useNavigate } from "react-router-dom"
import {theFinalData} from "../middleContent/data"
import React from "react"


export const UpperContent = () => {
  const navigate = useNavigate();
  
  //To go back to the main page wherever you were.
  const goBack = () => {
    navigate("/");
    window.location.reload();
  }

return(
  <div className="myDiv">

    <p className="logo-lgo" onClick={goBack}>Shopify Store!</p>
    <div className="content">
      
  
   </div>
  </div>
)}

export const message = localStorage.getItem("filteredItems")

