import './App.css';
import Header from "./components/Header/Header";
import PokemonsCardlist from "./components/PokemonsCardlist/PokemonsCardlist";
import PokemonProfile from "./components/PokemonProfile/PokemonProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonsCardlist />
      {/*<PokemonProfile />*/}
    </div>
  );
}

export default App;
