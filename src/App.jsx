// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import LayOut from "./components/LayOut/LayOut";
// import Routing from "./Router";


// const App = () => {
//   return (
//     <LayOut>
//       <Routing />
//     </LayOut>
    
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Routing from "./Router";
import Auth from "./pages/Auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="*"
        element={
          <LayOut>
            <Routing />
          </LayOut>
        }
      />
    </Routes>
  );
};

export default App;
