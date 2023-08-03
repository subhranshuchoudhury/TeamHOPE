import { useState } from "react";

import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/container/Home";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline bg-slate-500 text-yellow">
        Hello world!
      </h1> */}
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
