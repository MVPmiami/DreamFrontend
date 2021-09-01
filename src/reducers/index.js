import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import changeThemeReducer from './changeThemeReducer'

const rootReducer = combineReducers({
  changeTheme: changeThemeReducer,

})

export const store = createStore(rootReducer);

