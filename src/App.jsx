import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
            <MovieList />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;
