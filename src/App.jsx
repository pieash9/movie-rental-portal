import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { useReducer } from "react";
import { cartReducer, initialState } from "./reducer/CartReducer";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
