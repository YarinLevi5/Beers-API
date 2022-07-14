import "bootstrap/dist/css/bootstrap.min.css";
import BeersList from "./Components/BeersList/BeersList";
import { useEffect, useState } from "react";

function App() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeer(data));
  }, []);

  return <BeersList beersApi={beer} />;
}

export default App;
