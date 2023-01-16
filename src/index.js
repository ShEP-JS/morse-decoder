const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morseCode = [];
  let morseLetter = [];
  for (i = 0; i < expr.length; i++) {
    if (morseLetter.length != 10) {
      morseLetter.push(expr[i]);
    } else {
      morseCode.push(morseLetter);
      i -= 1;
      morseLetter = [];
    }
  }

  if (morseLetter.length > 0) {
    morseCode.push(morseLetter);
  }

  let word = [];
  for (a = 0; a < morseCode.length; a++) {
    let letter = morseCode[a];
    let codeLetter = [];
    for (b = 0; b < letter.length; b += 2) {
      if (letter[b] === "0" && letter[b + 1] === "0") {
        continue;
      } else if (letter[b] === "1" && letter[b + 1] === "0") {
        codeLetter.push(".");
      } else if (letter[b] === "1" && letter[b + 1] === "1") {
        codeLetter.push("-");
      } else if (letter[b] === "*") {
        codeLetter.push("*");
      }
    }
    if (codeLetter[0] === "*") {
      word.push(" ");
    } else {
      let decodeLetter = MORSE_TABLE[codeLetter.join("")];
      word.push(decodeLetter);
    }
  }
  return word.join("");
}

module.exports = {
  decode,
};
