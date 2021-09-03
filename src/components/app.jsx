import React from "react";
import './app.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../reducers/changeThemeReducer';
import Header from './Header/header'
import HelloSection from './HelloSection/helloSection';
import Info from './Info/info';
import Footer from './Footer/footer';


const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <HelloSection/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default App;

