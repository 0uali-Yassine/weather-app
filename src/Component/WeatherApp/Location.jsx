import React from 'react';
import { TfiTarget } from "react-icons/tfi";

function Location({adresse,onClick,setData,setName}) {

  async function location(){
    try{
      const response = await fetch(`http://ip-api.com/json/${adresse}`);
      const data = await response.json();
      setData(data.city);
      setName(data.city);
    }catch(error){
      console.log(error);
    }
  }

  function click(){
    onClick();
    console.log(adresse);
    location();
  }
    
  return (
    <div onClick={()=> click()} style={{display:'flex',justifyContent:'space-evenly',backgroundColor:' #B5A1E5',color:'black',borderRadius:'13px',width:'170px',alignItems:'center',cursor:'pointer'}}>
        <TfiTarget/>
        <p>Current Location</p>
     </div>
  )
}

export default Location;
