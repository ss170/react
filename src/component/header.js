import header from 'header';
import React from 'react';
import './header.css';  
const Header = () => {
  return (
    <header className ={Styles.header}>
      <nav className={Styles.headerNav}>
        <ul>
          <li><a className={Styles.headerLink} href="/">Home</a></li>
          <li><a className={Styles.headerLink} href="/about">About</a></li>
          <li><a className={Styles.headerLink} href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
