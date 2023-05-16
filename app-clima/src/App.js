import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import { Route, Routes } from 'react-router-dom';
import ContentCards from './components/ContentCards';
import About from './components/About';
import axios from 'axios';
import { useState } from 'react';


const apiKey = 'a8c8a95c6bb2676b8c7ab45221d95024';



function App() {

  const onFilter = (ciudadId) => {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0){
      return ciudad[0]
    } return null
  }

  const onSearch = (ciudad) =>{
    // console.log(`estoy ejecutando onsearch con ${ciudad}`);
    // antes de la peticion a la API, pregunto si esta la ciudad
    // con este for se lo ataja previamente y se evita un peticion a la API
    for(let city of cities){

      if(city.name.toLowerCase() === ciudad.toLowerCase()){
        alert("esta ciudad ya fue buscada")
        return
      }
    }
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((response) => {
      // console.log(response);

      setCities((oldCities) => [...oldCities, response.data]);
      // console.log(cities);
    })
    .catch((error)=> {
      alert(`La ciudad ${ciudad} no fue encontrada`)
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
        <Route exact path="/details/:ciudadId" element={ <Details onFilter={onFilter} /> } />
        
      </Routes>
    </div>
  );
}

export default App;
