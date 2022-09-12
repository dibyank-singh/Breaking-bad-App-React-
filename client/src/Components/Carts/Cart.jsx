import { Card ,styled,Tooltip, Typography} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Image=styled('img')`
    height: 50vh;
    width: 100%;
    /* object-fit: cover; */
    background-position: center;
`


const Cart = ({element}) => {

  return (
    <>
    <Card>
    <Tooltip title={
        <Box>
          <Typography>Name : {element.name}</Typography>
          <Typography>NickName : {element.nickname}</Typography>
          <Typography>Status : {element.status}</Typography>
        
        </Box>
    } arrow>
     
      <Image src={element.img} alt="Breaking bad charecters" />
      {/* <Typography style={{textAlign:"center"}}>{element.name}</Typography> */}
    </Tooltip>
    </Card>
    </>
  )
}

export default Cart