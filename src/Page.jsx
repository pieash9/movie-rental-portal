import { useContext } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} size-full`}>
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
    </div>
  );
};

export default Page;
