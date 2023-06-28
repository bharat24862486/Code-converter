import { Box, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Chat = ({response,setResponse}) => {
    let ref1 = useRef(null)
    // console.log(response,'chat')
    
    return (
        <Box bgColor={'white'} border={'1px solid black'} borderRadius={'10px'}>

            <Textarea placeholder='Write your code' value={response? response : ''} h={'50vh'} ></Textarea>

        </Box>
    )
}

export default Chat
