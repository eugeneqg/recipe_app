import './App.css';
import Header from '../components/header/header';
import Today from '../components/today/today';
import Categories from '../components/categories/categories';
import RandomRecipe from '../components/random/random';

function App() {
  return (
    <div className="App">
      <Header/>
      <Today/>
      <Categories/>
      <RandomRecipe/>
    </div>
  );
}

export default App;
