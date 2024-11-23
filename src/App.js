import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Homepage } from "./components/Homepage";

function App() {
  const [selectedList, setSelectedList] = useState("Dragon Ball");

  return (
    <div className="bg-primary w-full h-full">
      <Navbar selectedList={selectedList} setSelectedList={setSelectedList} />
      <Homepage selectedList={selectedList} />
    </div>
  );
}

export default App;
