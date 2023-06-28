import { Box, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Chat = ({ response, setResponse }) => {
    let ref1 = useRef(null)
    // console.log(response,'chat')

    return (
        <Box>
            {response ? <Box bgColor={'white'} mt={'2%'}  borderRadius={'10px'}>

                <Textarea color={'blue.400'} placeholder='Write your code' value={response ? response : ''} h={'30vh'} ></Textarea>

            </Box> : ''}

        </Box>

    )
}

export default Chat
