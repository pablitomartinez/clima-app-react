import './App.css';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(ciudad)=> alert(ciudad)} />
      <Card/>

    </div>
  );
}

export default App;
