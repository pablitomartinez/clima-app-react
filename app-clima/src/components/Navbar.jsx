import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { Box, Stack, Text, Spacer } from '@chakra-ui/react';

const Navbar = ({onSearch}) => {
  return (
    <Stack direction="row" spacing={4} minWidth='max-content' alignItems='center' gap='2'>
      <Box>
        <SearchBar onSearch={onSearch} />
      </Box>
      <Spacer />
      <Link to='/about' >
        <Text>About</Text>
      </Link>
      <Link to='/'>
        <Box pr={20} display="flex" alignItems="center">
          <img src="https://dummyimage.com/200x200/cccccc/000000.png&text=Logo" alt="" />
          <Text ml={2} fontWeight="bold">
            App Clima
          </Text>
        </Box>
      </Link>
    </Stack>
  );
}

export default Navbar;
