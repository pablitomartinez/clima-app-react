import React from 'react';
import Card from './Card';

const ContentCards = (props) => {
  return (
    <div>
      {props.cities.map(
        city =><Card 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          key={city.id}
          onClose={()=> alert(city.name)}
        /> 
      )}
    </div>
  );
}

export default ContentCards;
