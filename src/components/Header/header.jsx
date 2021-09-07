import React from "react";
import './header.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../../reducers/changeThemeReducer';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Header = () => {

  const toggleActiveBtn = () => {
    const aboutLink = document.querySelector('.about-link');
    const contactsLink = document.querySelector('.contacts-link');
    aboutLink.classList.toggle('active');
    contactsLink.classList.toggle('active');
  }

  return (
    <div className="header-wrapper">
        <div className="container">
          <header>
            <div className="logo">DreamFrontend</div>
            <div className="right-side">
              <div className="about-me"><Link to='/about' className="nav-link active about-link" onClick={toggleActiveBtn}>Обо мне</Link></div>
              <div className="contacts"><Link className="nav-link contacts-link" to='/contacts' onClick={toggleActiveBtn}>Контакты</Link></div>
            </div>
          </header>
        </div>
    </div>
  )
}

export default Header;