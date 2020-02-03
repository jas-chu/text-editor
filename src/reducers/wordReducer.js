import {WORD_SELECTED, CLICK_BOLD, CLICK_ITALIC, CLICK_UNDERLINE} from "../actions";

const initialState = {
  currentWord: null,
  bold: false,
  italic: false,
  underline: false
};

export default function (state = initialState, action) {
  switch (action.type) {
      case WORD_SELECTED:
        return {
          ...state,
          currentWord: action.payload,
          bold: false,
          italic: false,
          underline: false
        };
      case CLICK_BOLD:
        return {
          ...state,
          bold: action.payload
        };
      case CLICK_ITALIC:
        return {
          ...state,
          italic: action.payload
        };
      case CLICK_UNDERLINE:
        return {
          ...state,
          underline: action.payload
        };
      default:
        return state;     
  }
}