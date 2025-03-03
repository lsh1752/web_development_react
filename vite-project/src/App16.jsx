import { useState } from "react";
import Customer01 from "./Customer01";
import Customer02 from "./Customer02";
import Store from './Store';
import { OpenContext } from "./Context";
import './App.css'

function App() {
  const [isOpen, setisOpen] = useState(false);
  return(
    <div className="App" id="style1">
      <OpenContext.Provider value={{ isOpen, setisOpen }}>
        <Store />
        <Customer01 />
        <Customer02 />
      </OpenContext.Provider>
    </div>
  )
}

export default App;