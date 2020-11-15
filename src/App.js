import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import PokemonsCardlist from "./components/PokemonsCardlist/PokemonsCardlist";
import PokemonProfile from "./components/PokemonProfile/PokemonProfile";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={PokemonsCardlist} />
                <Route exact path="/pokemons/:pokemonId" component={PokemonProfile} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
