import logo from './logo.svg';
import './App.css';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import My from './Components/My';
import Chat from './Components/Chat';
import Type from './Components/Type';
import { useState } from 'react';
import axios from "axios"
import Main from './Components/Main';

function App() {
  const [type, setType] = useState('')
  const [text, setText] = useState('')
  const [response, setResponse] = useState('')
 


  return(
    <Main type={type} setType={setType} text={text} setText={setText} response={response} setResponse={setResponse} />
  )
}

export default App;
