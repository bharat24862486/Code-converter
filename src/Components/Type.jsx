import { Box, Select } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Type = ({type,setType}) => {

    let ref1 = useRef(null)
    function change(){
        setType(ref1.current.value)
    }
  return (
    <Box >
        <Select value={type?type:''} ref={ref1} mt={'50%'} onChange={change} bgColor={'white'} border={'1px solid black'} borderRadius={'10px'}>
            <option value={''}>-- select language --</option>
            <option value={'c'}>C</option>
            <option value={'c++'}>C++</option>
            <option value={'java'}>Java</option>
            <option value={'javascript'}>JavaScript</option>
            <option value={'python'}>Python</option>
            <option value={'golang'}>GoLang</option>
        </Select>
      
    </Box>
  )
}

export default Type
