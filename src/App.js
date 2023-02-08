import CatFact from "./components/CatFact/CatFact";
import DogImage from "./components/DogImage/DogImage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="appName">Cat Fact App</h1>
      </header>
      <CatFact />
      <hr />
      <DogImage />
    </div>
  );
}

export default App;
