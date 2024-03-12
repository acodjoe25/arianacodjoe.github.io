import './App.css';
import Header from "./headerStuff/header.tsx"
import Project from "./projects/project.tsx"
import Exp from "./expierence/exp.tsx"
import Home from "./home/home.tsx"

import React, { Dispatch, useState, SetStateAction } from 'react';

function App() {
  const [headerType, setHeaderType] = useState<string>("Home");
  let SecondComponent: React.FC | null = null;

  const handleHeaderTypeChange: Dispatch<SetStateAction<string>> = (newHeaderType: SetStateAction<string>) => {
    setHeaderType(newHeaderType);
  };

  if (headerType === "Home") {
    SecondComponent = Home;
  } else if (headerType === "Experience") {
    SecondComponent = Exp;
  } else if (headerType === "Projects") {
    SecondComponent = Project;
  } else {
    // Default component when headerType doesn't match any condition
    SecondComponent = Home; // You can set a default component here
  }

  return (
    <div className="overarching component">
      <div className="header">
        <Header
          headerType={headerType} // Pass the state variable
          setHeaderType={handleHeaderTypeChange}
        />
      </div>
      <div className="temp">
        <p className="temp-header">
          <h1></h1>
        </p>
      </div>
    </div>
  );
}

export default App;
