import React from 'react';
import {
    Stack,
    InputGroup,
    InputLeftAddon,
    Input,
    InputRightAddon
  } from '@chakra-ui/react';

const SearchBar = (props) => {
  return (
    <Stack spacing={4} mx="19%" my="5%">
        <InputGroup size='sm'>
            <InputLeftAddon children='https://' />
            <Input placeholder='Busca tu ciudad' />
            <InputRightAddon children='Buscar ' onClick={props.onSearch}/>
        </InputGroup>
    </Stack>
  );
}

export default SearchBar;
