import React from "react";
import './app.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../reducers/changeThemeReducer';
import Header from './Header/header'
import Footer from './Footer/footer';
import AboutMe from './AboutMe/aboutMe';
import Contacts from './Contacts/contacts';
import Home from './Home/home';
import { BrowserRouter, Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route path='/about'>
            <AboutMe/>
          </Route>
          <Route path='/contacts'>
            <Contacts/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;

