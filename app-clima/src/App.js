import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ContentCards from './components/ContentCards';
import About from './components/About';
import axios from 'axios';
import { useState } from 'react';

const apiKey = 'a8c8a95c6bb2676b8c7ab45221d95024';



function App() {


  const onSearch = (ciudad) =>{
    // console.log(`estoy ejecutando onsearch con ${ciudad}`);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((response) => {
      setCities((oldCities) => [...oldCities, response.data]);
      console.log(cities);
    })
  }

  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }

  const [cities, setCities] = useState([])

  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>

      <Routes>
          
        <Route path="/" element={ <ContentCards cities={cities} onClose={onClose}/> } />
        <Route exact path='/about' component={<About/>} />
        

      </Routes>
    </div>
  );
}

export default App;
