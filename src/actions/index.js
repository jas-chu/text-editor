export const selectWord = (word) => {
  console.log("The word selected is ", word);
  return {
      type: "WORD_SELECTED",
      payload: word
  }
};

export const clickBold = () => {
  console.log("bold");
  return {
      type: 'CLICK_BOLD',
      payload: "bold"
  }
};

export const clickItalic = () => {
  console.log("italic");
  return {
      type: 'CLICK_ITALIC',
      payload: "italic"
  }
};

export const clickUnderline = () => {
  console.log("underline");
  return {
      type: 'CLICK_UNDERLINE',
      payload: "underline"
  }
};