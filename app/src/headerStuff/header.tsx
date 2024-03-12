
import { Dispatch, SetStateAction } from "react";
import './header.css';
import React from "react";
/**
 * This is the header 
 */
interface HeaderProps{
    headerType:string;
    setHeaderType: Dispatch<SetStateAction<string>>;
}
function HandleClick(props : HeaderProps, page : string){

  props.setHeaderType(page);
  console.log(props.headerType);

}
function Header(props: HeaderProps) {
  let title: JSX.Element | null = null;

  if (props.headerType === "Home") {
    title = (
      <p>
        <span className="hello-text">Hello</span>, <span className="name-text">I am Ari.</span>
      </p>
    );
  } else {
    title = <p>{props.headerType}</p>;
  }

  return (
    <div className="header">
      {title}
      <div className="button-container">
        <button aria-label={"home"} onClick={() => HandleClick(props, "Home")}>
          Home Page
        </button>
        <button aria-label={"exp"} onClick={() => HandleClick(props, "Experience")}>
          Experience
        </button>
        <button aria-label={"proj"} onClick={() => HandleClick(props, "Projects")}>
          Projects
        </button>
      </div>
    </div>
  );
}

  
  export default Header;