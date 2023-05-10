import React, { useState } from 'react';
import {
    Stack,
    InputGroup,
    Input,
    InputRightAddon
  } from '@chakra-ui/react';

const SearchBar = ({onSearch}) => {
  const [searchInput, setSearchInput] = useState("")
 
  const changeHandler = (event) =>{
    setSearchInput(event.target.value)
    // console.log(searchInput);
  }
  return (
    <Stack spacing={4} mx={20} my="5%">
        <InputGroup size='sm'>
            <Input placeholder='Busca tu ciudad' onChange={changeHandler}/>
            <InputRightAddon children='Buscar ' onClick={() => onSearch(searchInput)}/>
        </InputGroup>
    </Stack>
  );
}

export default SearchBar;
