
import './App.css';
import Header from "./headerStuff/header.tsx"

import React, { useState } from 'react';
/**
 * This is the highest level component!
 */
function App() {
  const [headerType, setHeaderType] = useState<string>("Home");

    return (
      <div className="overarching component">

        <div className="header">
          <Header
            headerType={"headerType"} // TODO this may be wron
            setHeaderType={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.');
            } }          />
        </div>
        <div className="temp">
          <p className="temp-header">
            <h1>this is the second component and it will be one of the selected tabs withd efault being home </h1>
          </p>
        </div>
        </div>
    );
  }
  
  export default App;
