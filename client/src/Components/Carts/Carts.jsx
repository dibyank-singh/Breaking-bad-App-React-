import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {getdata} from "../../Api.js"

// Components import
import Cart from "./Cart"
const Carts = ({finaldata}) => {

    const[apidata , setApidata]=useState([]);

    useEffect(()=>{
        fetchdata()

    },[finaldata])

    const fetchdata=async()=>{
       const resdata= await getdata(finaldata)
       setApidata(resdata)
       
    }
    console.log(apidata)

  return (
   <>

<Grid container spacing={2} style={{padding:10}}> 
    {   
       apidata.map((element)=>(
            <>
            <Grid item xs={12} sm={6} lg={3}>  
            <Cart element={element}/>
            </Grid>
           
            </>
        ))
    }
  </Grid>
   
   </> 
   
  )
}

export default Carts;