import Beer from "../Beer/Beer";
import { useState, useEffect } from "react";
import "./BeersList.css";

function BeersList({ beersApi }) {
  // const [index, setIndex] = useState("10");
  // const [newArrayOfBeers, setData] = useState([]);

  // useEffect(() => {
  //   const arrayOfItems = "10";
  //   const newArrayOfBeers = [];
  //   for (let i = 0; i < beersApi.length; i++) {
  //     if (i < arrayOfItems) newArrayOfBeers.push(beersApi[i]);
  //   }
  //   setData(newArrayOfBeers);
  // }, [index]);

  return (
    <>
      {/* <button onClick={() => setIndex(index + 10)}> Load More </button> */}
      <div className="beer-list">
        {beersApi.map((beer, i) => (
          <Beer key={i} {...beer} />
        ))}
      </div>
    </>
  );
}

export default BeersList;
