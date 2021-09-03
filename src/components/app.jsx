import React from "react";
import './app.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../reducers/changeThemeReducer';
import Header from './Header/header'
import HelloSection from './HelloSection/helloSection';
import Info from './Info/info';


const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <HelloSection/>
      <Info/>
    </div>
  )
}

export default App;

