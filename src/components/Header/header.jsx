import React from "react";
import './header.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../../reducers/changeThemeReducer';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header-wrapper">
        <div className="container">
          <header>
            <div className="logo">DreamFrontend</div>
            <div className="right-side">
              <div className="about-me active"><Link to='/about' className="nav-link">Обо мне</Link></div>
              <div className="contacts"><Link className="nav-link" to='/contacts'>Контакты</Link></div>
            </div>
          </header>
        </div>
    </div>
  )
}

export default Header;