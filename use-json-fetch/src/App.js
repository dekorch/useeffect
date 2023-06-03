import React from "react";
import "./App.css";
import Data from "./components/Data.js";
import Error from "./components/Error.js";
import Loading from "./components/Loading.js";

export default function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}