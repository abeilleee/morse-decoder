const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const arr = expr.split("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length) {
      if (result[result.length - 1].length > 9) {
        result.push([arr[i]]);
      } else {
        result[result.length - 1].push(arr[i]);
      }
    } else {
      result.push([arr[i]]);
    }
  }
  result = result.map(item => {
    if (item.includes('*')) {
      return ' ';
    }
    
    let string = [];
    for (let k = 0; k < item.length; k+=2) {
      string.push(item[k].concat(item[k + 1]).replace('10', '.').replace('11', '-'));
    }
    return string.includes('*') ? ' ' : MORSE_TABLE[string.join('').replaceAll('0', '')];
  })
  return result.join('');
}


module.exports = {
  decode
}