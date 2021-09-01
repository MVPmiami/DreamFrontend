import React from "react";
import './app.scss';
import { useDispatch, useSelector } from "react-redux";
import {setNewTheme} from './../reducers/changeThemeReducer';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.changeTheme.isLight);

  const darkStyles = {
    backgroundColor: 'black',
    color: 'white'
  }

  const lightStyles = {
    backgroundColor: 'white',
    color: 'black'
  }

  function changeTheme (theme) {
    dispatch(setNewTheme(!theme));
  }

  return (
    <div style={theme ? lightStyles: darkStyles }>
      React is working !
      <button onClick={() => {changeTheme(theme)}}>change theme</button>
    </div>
  )
}

export default App;

