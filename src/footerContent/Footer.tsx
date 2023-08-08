import "./Footer.css";

export const Footer = () => {



    return (<div className="mainDiv">

        <div style={{display:"flex", paddingRight:70+'px'}}>
           <p className="thePara">Made By</p><p className="myPara" 
           onClick={() => window.location.href='https://www.linkedin.com/in/sajad-kenani-518a8322a/'}>Sajad Kenani</p>
        </div>

        <div style={{display:"flex", paddingRight:70+'px'}}>
           <p className="thePara">Note:</p><p className="myPara">All the information are saved in the "Local Storage".</p>
        </div>

    </div>
    )
}