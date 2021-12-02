import { useState } from "react";
import "./App.css";

import IronbnbList from './components/IronbnbList';  // <== IMPORT
// import TimerFour from "./components/TimerFour"

function App() {

  return (
    <div className="App">
      <IronbnbList />
    </div>
  );
}

export default App;
