import React from "react";
import './header.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../../reducers/changeThemeReducer';

const Header = () => {

  return (
    <div className="header-wrapper">
        <div className="container">
          <header>
            <div className="logo">DreamFrontend</div>
            <div className="right-side">
              <div className="about-me active">Обо мне</div>
              <div className="contacts">Контакты</div>
            </div>
          </header>
        </div>
    </div>
  )
}

export default Header;