import "./App.css";
import "@mantine/core/styles.css";

import { Cards } from "./components/Cards";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import "remixicon/fonts/remixicon.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="menu py-6 px-4 md:px-64 flex flex-col items-center">
        <div className="title text-5xl text-amber-950 font-extrabold p-3">
          Enjoy a new blend of coffee style
        </div>
        <div className="sub-title text-xl text-black">
          Explore all flavours of coffee with us
        </div>
      </div>
      <div className="cards py-6 px-4 md:px-24 flex flex-wrap justify-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
