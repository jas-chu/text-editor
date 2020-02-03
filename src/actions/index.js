export const WORD_SELECTED = "WORD_SELECTED";
export const CLICK_BOLD = "CLICK_BOLD";
export const CLICK_ITALIC = "CLICK_ITALIC";
export const CLICK_UNDERLINE = "CLICK_UNDERLINE";

export const selectWord = (word) => {
  return {
      type: WORD_SELECTED,
      payload: word
  }
};

export const clickBold = (bold) => {
  return {
      type: CLICK_BOLD,
      payload: !bold
  }
};

export const clickItalic = (italic) => {
  return {
      type: CLICK_ITALIC,
      payload: !italic
  }
};

export const clickUnderline = (underline) => {
  return {
      type: CLICK_UNDERLINE,
      payload: !underline
  }
};