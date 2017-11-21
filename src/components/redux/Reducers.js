import { combineReducers } from 'redux'

const initialState = {
  lang: ""
}

function lodcApp(state, action) {
  if(typeof state === "undefined") {
    return initialState;
  }
  switch(action.type) {
    case "SET_LANG_DATA":
      return Object.assign({}, state, {
        lang: action.lang
      });
      break;
    case "SET_WEBCONTENTS_DATA":
      return Object.assign({}, state, {
        webcontents: action.webcontents
      });
      break;
    default:
      return state;
      break;
  }
}

export default combineReducers({lodcApp});
