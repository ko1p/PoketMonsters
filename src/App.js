import './App.css';
import Header from "./components/Header/Header";
import PokemonsCardlist from "./components/PokemonsCardlist/PokemonsCardlist";
import PokemonProfile from "./components/PokemonProfile/PokemonProfile";
import Navigation from "./components/Navigation/Navigation";
import PokemonsListPopup from "./components/PokemonsListPopup/PokemonsListPopup";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/*<PokemonsCardlist />*/}
      <PokemonProfile />
      <PokemonsListPopup />
    </div>
  );
}

export default App;
