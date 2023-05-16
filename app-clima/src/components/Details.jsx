import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
  CloseButton
} from '@chakra-ui/react';

const Details = ({onFilter}) => {

  var params = useParams()
  // console.log("params -->",params);
  let city = onFilter(params.ciudadId)
  // console.log(city);

  
  return (
    <div>
      <Center py={2} px={0}>
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
              {city.sys.country}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1} display="flex" alignItems="center" justifyContent="space-between" >
            <span style={{marginRight: "10px"}}>{city.name}</span>
            <img src={"http://openweathermap.org/img/wn/"+city.weather[0].icon+"@2x.png"} width="80" height="80" alt=""/>
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            La tempertatura Max es de {city.main.temp_max}
          </Text>
          <Text color={'gray.500'} noOfLines={2}>
            La tempertatura Min es de {city.main.temp_min}
          </Text>        
          <Text color={'gray.500'} noOfLines={2}>
            Con una Humedad de {city.main.humidity}
          </Text>        
          <Text color={'gray.500'} noOfLines={2}>
            Visibilidad de {city.visibility}
          </Text>        
          <Text color={'gray.500'} noOfLines={2}>
            La tempertatura Min es de {city.min}
          </Text>        
          </Box>
        
      </Box>
    </Center>
    </div>
  );
}

export default Details;



