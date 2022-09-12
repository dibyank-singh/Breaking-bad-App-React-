import { AppBar, Toolbar,Box, InputBase,styled, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const MainBox= styled(AppBar)`
background-color: black;
position: static;

`
const Innerbox=styled(Box)`

display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
`
const Inputbox=styled(Box)`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
 background-color: rgb(255,255,255,0.15);
 padding: 0px 20px;
 border-radius: 6px;
`
const InnerInput=styled(InputBase)`
color: inherit;
`
const StyleIcon=styled(SearchIcon)`


`


function Header({setFinaldata}) {

  const handlechange=(e)=>{
    // console.log(e.target.value)
    setInputdata(e.target.value)

  }
    const[inputdata , setInputdata]=useState("")
    setFinaldata(inputdata)
    

  
  return (
    <>
    <MainBox>
        <Toolbar> 
          <Innerbox>
            <h2>Breaking Bad</h2>
             
             <Inputbox>
             <StyleIcon/>
              <InnerInput
              placeholder='Search By Name'
              onChange={(e)=>handlechange(e)}
              
              />
             </Inputbox>

          </Innerbox>
        </Toolbar>
    </MainBox>

    </>
  );
}

export default Header;
