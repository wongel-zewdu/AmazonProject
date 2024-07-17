import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Routing from "./Router";

const App = () => {
  return (
    <LayOut>
      <Routing />
    </LayOut>
  );
};

export default App;
