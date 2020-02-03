export const WORD_SELECTED = "WORD_SELECTED";
export const CLICK_BOLD = "CLICK_BOLD";
export const CLICK_ITALIC = "CLICK_ITALIC";
export const CLICK_UNDERLINE = "CLICK_UNDERLINE";

export const selectWord = (word) => {
  console.log("The word selected is ", word);
  return {
      type: WORD_SELECTED,
      payload: word
  }
};

export const clickBold = () => {
  console.log("bold");
  return {
      type: CLICK_BOLD,
      payload: true
  }
};

export const clickItalic = () => {
  console.log("italic");
  return {
      type: CLICK_ITALIC,
      payload: true
  }
};

export const clickUnderline = () => {
  console.log("underline");
  return {
      type: CLICK_UNDERLINE,
      payload: true
  }
};