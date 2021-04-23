import "./App.css";
import React, { useState, useEffect } from "react";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  useEffect(() => {
    fetch("/api/laptop").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);

  const [data, setData] = useState(null);

  return (
    <div className="App">
      hello
      {data ? data.map((laptop, index) => <Laptop laptop={laptop} key={index} />) : <LoadingMask />}
    </div>
  );
};

export default App;
