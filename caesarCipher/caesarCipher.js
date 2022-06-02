const caesarCipher = (string, amount) => {
  var cipher = ""; //creating the variable which will store the ciphered text

  //Looping through the string.
  for (let i = 0; i < string.length; i++) {
    let characters = string[i]; //Passing the strings individually to the characters variable

    if (characters.match(/[a-z]/i)) {
      //Checking to see if the characters match the letters in the english vocabulary.

      let code = string.charCodeAt(i); //We are checking the unicode of each letter. As it is going to be different if the letter is small or capital

      if (code >= 65 && code <= 90) {
        //If the letter is capital, run this code.
        characters = String.fromCharCode(code - 65 + amount + 65);
        //Otherwise run the code below if the letter is small.
      } else if (code >= 97 && code <= 122) {
        characters = String.fromCharCode(code - 97 + amount + 97);
      }
    }
    cipher += characters; //Return the characters to the cipher variable.
  }
  return cipher;
};

module.exports = caesarCipher;
