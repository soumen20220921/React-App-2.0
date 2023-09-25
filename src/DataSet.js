import React, { useState } from 'react'
import "./DataSet.css"
// import { useState } from 'react';
// import Model from "./Model"

import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const data = 
    [
        {   
            img:"https://png.pngtree.com/png-vector/20230325/ourmid/pngtree-3-star-vector-clipart-png-image_6665412.png",
            Standard: "Standard",
            catagory: "For the basics",
            price: "$15",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem nobis eveniet enim hic nesciunt itaque saepe unde corporis provident"
        },
        {   
            img:"https://img.freepik.com/free-vector/gradient-5-star-logo-template_23-2150342391.jpg",
            Standard: "Standard",
            catagory: "For the professional",
            price: "$50",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem nobis eveniet enim hic nesciunt itaque saepe unde corporis provident"
        },
        {   
            img:"https://seeklogo.com/images/1/4-star-logo-7EC0973792-seeklogo.com.png",
            Standard: "premium",
            catagory: "For the small team",
            price: "$30",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem nobis eveniet enim hic nesciunt itaque saepe unde corporis provident"
        },
    ]
    


function DataSet() {

   

    return (
       
         <div className='content'>
           
      {data.map((eml) => (
         <div className="box no1">
         <div className="innerbox1">
             <img src={eml.img} alt="anc" />
         </div>
         <div className='innerbox2'>
             <h2>{eml.Standard}</h2>
             <h3>{eml.catagory}</h3>
             <h1>{eml.price}</h1>
             <p> {eml.about} 
             </p>
             
         </div>
         <div className='innerbox3'>
             <Button className="btn hireme-btn">
                 <NavLink to="/"> Access </NavLink>
             </Button>
         </div>
     </div>
      ))}
 
         
            {/* <div className="box no2"></div>
            <div className="box no3"></div> */}
        </div>
        
       
    )
    }

export default DataSet
