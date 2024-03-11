
import './App.css';
import {Header} from './headerStuff/header'

import React from 'react';
/**
 * This is the highest level component!
 */
function App() {
  const [headerType, setHeaderType] = useState<string>("Home");

    return (
      <div clasName="overarching component">

        <div classname="header">
          <Header
            headerType={"headerType"}
            setHeaderType={setHeaderType}

          />
        </div>
        <div className="temp">
          <p className="temp-header">
            <h1>this is the second component </h1>
          </p>
        </div>
        </div>
    );
  }
  
  export default App;
