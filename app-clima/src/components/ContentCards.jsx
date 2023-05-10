import React from 'react';
import Card from './Card';

const ContentCards = ({cities, onClose}) => {
  console.log("CITIES",cities);
  return (
    <div>
      {cities.map(
        city =><Card 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          key={city.id}
          id={city.id}
          onClose={onClose}
        /> 
      )}
    </div>
  );
}

export default ContentCards;
