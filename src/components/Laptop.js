import React, { useState } from "react";

function Laptop({ laptop }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <h1>{laptop.name}</h1>
      {isClicked && (
        <div>
          <p>Brand: {laptop.brand}</p>
          <p>Weight: {laptop.weigth}</p>
        </div>
      )}
      <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? "Show less" : "Show more"}</button>
    </div>
  );
}
export default Laptop;
