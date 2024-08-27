const getElementWidth = (content, padding, border) => {
  return `${parseInt(content) + parseInt(padding) * 2 + parseInt(border) * 2}`;
};
