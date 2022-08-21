import "./Index.css";
import Navbar from "./Component/navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
