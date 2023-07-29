import { useState } from "react"
import "./upper.css"
import "../middleContent/middle"
import { Container } from "@mui/material"
let finalMessage = [""]
export const UpperContent = () => {
  const [search, setsearch] = useState([""])

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setsearch(event.currentTarget.value.split(""))
    finalMessage = search
  }


return(

  <div className="myDiv">

    <p className="logo-lgo">Shopify Store!</p>
    <div className="content">
      
    <input className="mySearchBar-inp" type="text" placeholder="Search" onChange={ handleSearch } />
    <button className="btn myButton-btn" style={{backgroundColor: "white", color : "white" }}>
    <svg style={{fill: "rgb(49, 142, 255)"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
   </button>
   </div>
  </div>
)}

export const message = finalMessage