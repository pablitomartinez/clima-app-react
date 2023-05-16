import React from 'react';
import Card from './Card';
import {
SimpleGrid
} from '@chakra-ui/react';

const ContentCards = ({cities,  onClose}) => {
  console.log("CITIES",cities.name);
  // console.log("CITIES",cities.coord.id);
  
    return (
      <SimpleGrid columns={3} spacing={0} key={cities.id}>
        {cities.map( city => <Card 
                max={city.main.temp_max}
                min={city.main.temp_min}
                name={city.name}
                img={city.weather[0].icon}
                key={city.id}
                id={city.id}
                onClose={onClose}
              /> 
        )}
    </SimpleGrid>
  );
}

export default ContentCards;
