const capitalizeString = () => {
  let smallWord = "capital";
  let capital = smallWord.charAt(0).toUpperCase() + smallWord.slice(1);
  return capital;
};

module.exports = capitalizeString;
