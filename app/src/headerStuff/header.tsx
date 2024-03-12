
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

}
function Header(props : HeaderProps) {
    return (
      <div className="header">
        <p>
            {props.headerType}
            
        </p>
      <button aria-label={"home"} onClick={() => HandleClick(props, "home")}>
        Home
      </button>
      <button aria-label={"exp"} onClick={() => HandleClick(props, "exp")}>
        Experience
      </button>
      <button aria-label={"proj"} onClick={() => HandleClick(props, "proj")}>
        Projects
      </button>
      </div>
    );
  }
  
  export default Header;