import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'

const My = ({text,setText}) => {
    let ref1 = useRef(null)
    function change(){
        setText(ref1.current.value)
    }
  return (
    <Box bgColor={'white'} border={'1px solid black'} borderRadius={'10px'}>
       {/* <Input placeholder='Write your code'/> */}
       <Textarea ref={ref1} pt={'30%'} onChange={change} value={text?text : ''} placeholder='Write your code' h={'50vh'} ></Textarea>
       
      
    </Box>
  )
}

export default My
