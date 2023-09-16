import "./middle.css";
import { theFinalData } from "./data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from "@mui/material";

// Sending values to Card Page...
var MyInfo = [0];
const getInfo = (info:object) => { MyInfo.splice(0); (Object.values(info)).map((a) => {MyInfo.push(a)}); }
export const myArray = MyInfo;

type data = {
  Id:Number,
  name: String,
  price: String,
  priceMarginTop: String,
  priceMarginBottom: String,
  image: String,
  imageWidth: String,
  imageHeight: String,
  imageMarginBottom: String,
  period: String, //in months,
  inStock: string,
  isPurchased: string,
  purchasedOnes: string,
  description: string,
};

const myData: any[][] = [];
myData.push(theFinalData);

let myFirstValue = 0;
let mySecondValue = 0;

let firstPeriodValue = 0;
let secondPeriodValue = 0;


export const MiddleContent = () => {
 
  const [allshow, useallshow] = useState(false);
  const [select, useselect] = useState(false);
  const [price, useprice] = useState(false);
  const [period, useperiod] = useState(false);
  const [sort, usesort] = useState(false);
  const [alpha, usealpha] = useState(false);
  const [time, usetime] = useState(false);
  const [myPrice, usemyprice] = useState(false);
  const [myPeriod, usemyperiod] = useState(false);

  const [alphabeticalSort, usealphabeticalsort] = useState(0);
  const [periodicSort, useperiodicsort] = useState(0);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);


  useEffect(() => {
    handleSearch("")

  }, []); 

  const myData: any[][] = [];
  myData.push(theFinalData);
  
  const handleSearch = (query: any) => {
    setSearchQuery(query);

    // Filter items based on the search query.
    setFilteredItems((myData[0]).filter((item: any) =>item.name.toLowerCase().includes(query.toLowerCase())));
  };

  // All option
  const showAll = () => {
    usealphabeticalsort(0)
    useperiodicsort(0)
    myFirstValue = 0;
    mySecondValue = 100000000;
    hideEverything()
    useallshow(true)

  }

  // Inside price options
  const PriceOptionOne = () => {
    myFirstValue = 0;
    mySecondValue = 100;
    hideEverything()
    usemyprice(true)
  }
  const PriceOptionTwo = () => {
    myFirstValue = 100;
    mySecondValue = 1000;
    hideEverything()
    usemyprice(true)
  }
  const PriceOptionThree = () => {
    myFirstValue = 1000;
    mySecondValue = 10000;
    hideEverything()
    usemyprice(true)
  }
  const PriceOptionFour = () => {
    myFirstValue = 10000;
    mySecondValue = 50000;
    hideEverything()
    usemyprice(true)
  }
  const PriceOptionFive = () => {
    myFirstValue = 50000;
    mySecondValue = 100000;
    hideEverything()
    usemyprice(true)
  }


  // Inside period Options
  const PeriodOptionOne = () => {
    firstPeriodValue = 0;
    secondPeriodValue = 1;
    hideEverything()
    usemyperiod(true);
  }   
  const PeriodOptionTwo = () => {
    firstPeriodValue = 1;
    secondPeriodValue = 5;
    hideEverything()
    usemyperiod(true);
  }   
  const PeriodOptionThree = () =>{
    firstPeriodValue = 5;
    secondPeriodValue = 12;
    hideEverything()
    usemyperiod(true);
  } 
  const PeriodOptionFour = () => {
    firstPeriodValue = 12;
    secondPeriodValue = 99999999;
    hideEverything()
    usemyperiod(true);
  }

  //A To Z option
  const AZoption = () => {
    useperiodicsort(0)
    usealphabeticalsort(1)
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false); 
  }

  //A To Z option
  const ZAoption = () => {
    useperiodicsort(0)
    usealphabeticalsort(-1)
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false);
  }

  //Old To New option
  const OldToNew = () => {
    usealphabeticalsort(0)
    useperiodicsort(-1)
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false); 

  }

  //New To Old option
  const NewToOld = () => {
    usealphabeticalsort(0)
    useperiodicsort(1)
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false); 

  }

  // Price Option Inside select
  const priceOption = () => {
    price ? useprice(false) : useprice(true);
    useperiod(false);
  }

  // Period Option Inside Select
  const periodOption = () => {
    period ? useperiod(false) : useperiod(true);
    useprice(false);
  }
  const alphaOption = () => {
    alpha ? usealpha(false) : usealpha(true);
    usetime(false)
  }
  const timeOption = () => {
    time ? usetime(false) : usetime(true);
    usealpha(false)
  }

  // To Hide all the DIVs from the main four options 
  const hideEverything = () => {
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false); usemyprice(false); usemyperiod(false);
  }

  //To only keep Select Div
  const showSelect = () => {
    useselect(false); usesort(false); usealpha(false); usetime(false);
    useselect(true);
  }

  //To only keep Sort Div
  const showSort = () => {
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false);
    usesort(true);
  }

  const workForSelect = () => {
    useselect(false); useprice(false); useperiod(false); usesort(false); usealpha(false); usetime(false);
  }

  // Remove a specific product from the side bar
  const removeProduct = (b:Number) => {
    delete localStorage[`finalID${b}`];
    delete localStorage[`isPurchased${b}`];
    delete localStorage[`purchasedOnes${b}`];
    window.location.reload();
  }

  let finalPrice = 0
  // Increasing the values or the prices and their counters
  const increasing = (PurchesingCount:String, price:String) => {
    finalPrice += Number(PurchesingCount) * Number(price)
  }
  // To erase all the products on the side bar
  const eraseEverything = () => {
    for(let i = 0; i <= myData[0].length; i++){
    delete localStorage[`finalID${i}`];
    delete localStorage[`isPurchased${i}`];
    delete localStorage[`purchasedOnes${i}`];
    }
    window.location.reload();
  }

return(
<div>
  <input className="mySearchBar-inp" type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
  <button className="btn myButton-btn" style={{backgroundColor: "white", color : "white" }}>
  <svg style={{fill: "rgb(49, 142, 255)"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
  </button>
    {/* The main Four Options */}
  <div className="myOptionDiv-div">
  <a className="mainOption-opt" onClick={showAll}>All</a>  
  <a className="mainOption-opt" onClick={() => select ? workForSelect() : showSelect()}>&#11167; Select</a>
  <a className="mainOption-opt" onClick={() => sort ?  workForSelect() : showSort()}> &#11167; Sort</a>
  <Link className="mainOption-opt" to={"/addYourCard"}><a>Add</a></Link>
  </div>

  {/* To shows the options of select. */}
  {select && <div className="mainSelect-div card" >
    <a className="insideMainOptions-opt " onClick={priceOption}>Price&nbsp;&#10148; </a>
    <a className="insideMainOptions-opt " onClick={periodOption}>Period&nbsp;&#10148; </a>
  </div>}

  {/* To shows the options of sort. */}
  {sort && <div className="mainSort-div card" >
    <a className="insideMainOptions-opt" onClick={alphaOption}>Alphabet &#10148; </a>
    <a className="insideMainOptions-opt" onClick={timeOption}>Time &#10148; </a>
  </div>}
  
  {/* To shows the options of Alpha. */}
  {alpha && <div className="mainAlpha-div card" >
    <a className="insideMainOptions-opt" onClick={AZoption}>A - Z</a>
    <a className="insideMainOptions-opt" onClick={ZAoption}>Z - A</a>
  </div>}

  {/* To shows the options of Time. */}
  {time && <div className="mainTime-div card" >
    <a className="insideMainOptions-opt" onClick={OldToNew}>Old To New</a>
    <a className="insideMainOptions-opt" onClick={NewToOld}>New To Old</a>
  </div>}

  {/* To shows the options of price inside select option. */}
  {price && <div className="mainPrice-div card">
    <a className="insideMainOptions-opt" onClick={PriceOptionOne}> 0 - 100$</a>
    <a className="insideMainOptions-opt" onClick={PriceOptionTwo}> 100$ - 1k</a>
    <a className="insideMainOptions-opt" onClick={PriceOptionThree}> 1k - 10k</a>
    <a className="insideMainOptions-opt" onClick={PriceOptionFour}> 10k - 50k</a>
    <a className="insideMainOptions-opt" onClick={PriceOptionFive}> 50k - 100k</a>
  </div>}

  {/* To shows the options of period inside select option. */}
  {period && <div className="mainPeriod-div card">
    <a className="insideMainOptions-opt" onClick={PeriodOptionOne}> 0 - 1 month</a>
    <a className="insideMainOptions-opt" onClick={PeriodOptionTwo}> 1 - 5 months</a>
    <a className="insideMainOptions-opt" onClick={PeriodOptionThree}> 5 - 12 months</a>
    <a className="insideMainOptions-opt" onClick={PeriodOptionFour}> More than a year</a>
  </div>}

<div className="myMainDiv-div">{/* Main options*/}

  {/* To render the page!*/}
  {allshow && <>{useallshow(false)}</>}
<Container className="" style={{ marginTop: 10+"px"}}>
  <div className="row theRow">  
 {filteredItems
 // To sort the cards according to their period
 .sort((a, b) => periodicSort * (Number(a.period) - Number(b.period)))
  // To sort the cards alphabetically
 .sort((a, b) => (alphabeticalSort * a.name.localeCompare(b.name)))
  // Using filter method...
 .filter( data => 
  // To display the cards according to their price
  myPrice ? (Number(data.price) > myFirstValue) && (Number(data.price) < mySecondValue) :(Number(data.price) > 0) && (Number(data.price) < 10000) &&
  // To display the cards according to their period 
  myPeriod ? (Number(data.period) > firstPeriodValue) && (Number(data.period) < secondPeriodValue) :(Number(data.period) > 0) && (Number(data.period) < 10000) 
  )
 // To display the cards...
 .map((a:data, b:number) => (
  // Some Adjusments from Bootstrap
    <div className="col-2" key={"divOne "+b}>
     {<div className="card " key={"divTwo "+b}>
      {/* To Go to the Card Page */}
      <Link to="/card" style={{textDecoration: "none", color: "black"}}>
       {/* To Send Info to To Card Page */}
        <div className="card-body text-left" key={"divThree "+b} onClick={() => getInfo([a.name, a.price, a.image, a.period, a.inStock, b, a.description])}>   
        {/* Displaying the images...   */}
          <img className="img-thumbnail rounded" style={{justifyContent: "flex"}} src={`${a.image}`} />
          {/* Styling the paragraphs and displaying them... */}
          <p className="card-body text-dark" key={"POne "+b}
          style={{marginTop: 15+"px", marginBottom: -20+"px", marginLeft:-10+"px", paddingLeft: 10+"px", paddingRight: 0+"px", fontSize:"80%"}}>
          {a.name} 
          <p key={"PTwo "+b}>Price: {a.price}$   
          {/* Checking the Released Data */}
          <p key={"PThree "+b} className="text-secondary">{Number(a.period) >= 12 && <p style={{display:"flex"}}>
            Released {(Number(a.period) * 0.0833334).toFixed()}&nbsp;{Number((Number(a.period) * 0.0833334).toFixed()) !== 1 ? <p> years ago </p> : <p> year ago </p>} </p>}
          <p key={"PFour "+b} className="text-secondary">{Number(a.period) < 12 && Number(a.period) > 0.9 && 

          <p style={{display:"flex"}}> Released {(Number(a.period)).toFixed()}&nbsp;{(Number(a.period)) !== 1 ? <p>months ago</p> : <p>month ago</p>} </p>}

          <p key={"PFive "+b} className="text-secondary">{Number(a.period) < 1 && <p style={{marginBottom:30+"px"}}> Released Recently </p>}
          {/* Styling and Checking the Availablilities */}
          <p style={{margin: 0, marginTop: -30+"px", backgroundColor:"rgb(255, 49, 49)", width: 100 + "%"}}>{Number(a.inStock) === 0 && 
          <p style={{color: "white"}}>&nbsp;Not available</p>}
          <p style={{margin: 0, backgroundColor:"rgb(49, 142, 255)", width: 100 + "%"}}>{Number(a.inStock) !== 0 && 

          <p style={{ color: "white", display:"flex", height:20+"px"}}>&nbsp;{a.inStock} {Number(a.inStock) !==1 ? 
          <p style={{display:"flex"}}>&nbsp;Are available</p>:<p>&nbsp;Is available</p>}</p>}
          </p></p></p></p></p></p></p> 
        </div> 
      </Link>
    </div>}    
  </div>))}
</div> 
</Container> 

{/* The side bar... */}
<div className="sideBar-bar">
  <p className="mainSideBarPara">Your Cart:</p>
  &nbsp; {/* spacing */}
  {myData[0].filter( data => data.isPurchased === "1")
  
 // To display the cards...
 .map((a:data, b) => (
    <div className=" col-12" key={"divOne "+b}>   
     {<div style={{ boxShadow: "0px 2px rgb(49, 142, 255)"}} className="" key={"divTwo "+b}> 
     {/* To Increase the values of prices and product count */}
     <>{increasing(a.purchasedOnes, a.price)}</>

     {/* Styling and Displaying... */}
        <div className="card-body text-left " style={{display: "flex", height:60+"px", padding:0}} key={"divThree "+b}>     
          <img className="img-thumbnail myMainImage" style={{justifyContent: "flex", maxBlockSize: 50 +"px", marginTop: 5+"px"}} src={`${a.image}`} />
          <p className="card-body text-dark" key={"POne "+b}
          style={{marginLeft: 10+"px",paddingRight: 10+"px", fontSize:"13px", paddingTop: 7+"px"}}>
          {a.name} 
          <p key={"PTwo "+b}>Price: {a.price}$ 
          </p></p>
          <p style={{marginRight: 5 +"px", marginTop: 17+"px", marginBottom:-7+"px"}}>x{a.purchasedOnes}</p>

          {/* To remove an Item */}
          <button className="myMiniButton" onClick={() =>removeProduct(a.Id)}></button>
        </div> 
    </div>}    
  </div>))}
  {/* Checking and displaying the buttons of buying or deleting in the side bar */}
  {finalPrice !== 0 ?
   <div style={{display:"flex"}}><button className="myBuyingButton">Buy Now! {finalPrice}$</button>
   <button className="myErasingButton" onClick={eraseEverything}>Delete All!</button> </div> : 
   <Link className="mainOption-opt" to={"/addYourCard"}>
    <button className="myBuyingButton" style={{display:"flex", margin: "auto"}}>Add Something To sell!</button></Link>}
</div>
</div>
</div>
)
}
export const myPeriod = localStorage.getItem("period")
