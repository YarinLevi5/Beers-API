import Beer from "../Beer/Beer";
import { useState } from "react";
import "./BeersList.css";

function BeersList({ beersApi }) {
  const beers = 10;
  const [index, setIndex] = useState(beers);

  const handleNextBeer = () => {
    setIndex(index + beers);
  };

  return (
    <>
      <div className="beer-list">
        {beersApi.slice(0, index).map((beer, i) => (
          <Beer key={i} {...beer} />
        ))}
      </div>
      <div className="btn-container">
        <button className="loadMoreBtn" onClick={handleNextBeer}>
          {" "}
          Load More
        </button>
      </div>
    </>
  );
}

export default BeersList;
