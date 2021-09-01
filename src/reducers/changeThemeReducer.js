const SET_NEW_THEME = 'SET_NEW_THEME';

const defultState = {
  isLight: true,
}




export default function changeThemeReducer(state = defultState, action) {

    switch (action.type) {
      case SET_NEW_THEME:
        return {
          ...state,
          isLight: action.payload
        }

      default:
        return state;
    }

}

export const setNewTheme = (isLight) => ({type: SET_NEW_THEME, payload: isLight })