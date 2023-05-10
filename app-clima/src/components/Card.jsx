import React from 'react';
import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  CloseButton ,
  HStack,
} from '@chakra-ui/react';

import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

const Card = ({max, min, name, img, key,id, onClose}) => {

    const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box position="relative">
          <CloseButton
            position="absolute"
            top={2}
            right={2}
            size="md"
            _hover={{
              bg: 'gray.300',
              color: 'black',
            }}
            onClick={ ()=> onClose(id)}
          />
        </Box>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              React
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1} display="flex" alignItems="center" justifyContent="space-between" >
            <span style={{marginRight: "10px"}}>{name}</span>
            <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt=""/>
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            La tempertatura Max es de {max}
          </Text>
          <Text color={'gray.500'} noOfLines={2}>
            La tempertatura Min es de {min}
          </Text>        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}

export default Card;
