import React, { SetStateAction } from 'react';
import './header.css';
/**
 * This is the header 
 */
interface HeaderProps{
    headerType:string;
    setHeaderType:SetStateAction<string>;
}
function Header(props : HeaderProps) {
    return (
      <div className="header">
        <p>
            {props.headerType}
        </p>
      </div>
    );
  }
  
  export default Header;