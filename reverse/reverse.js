const reverseString = () => {
  let normalWord = "hello";
  let splitString = normalWord.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  return joinString;
};

module.exports = reverseString;
