import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import img from "../images/img.jpg"; 

export function Home() {
 

  return (
    
    <div className="wrapper img" >
     
       <img src={img} alt="Description de l'image" width={"60%"} height={"323"} />
     
      

    </div>
   
  );
 
}