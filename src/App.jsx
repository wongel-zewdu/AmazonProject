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
import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Routing from "./Router";
import Auth from "./pages/Auth/Auth";
import { Type } from "./utility/action.type";
import { DataContext } from "./components/DataProvider/Data provider";
import { auth } from "./utility/firebase";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
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
