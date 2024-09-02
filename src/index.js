const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/(.{10})/g);
   
    function codeLet(letter) {
        let str = '';
        if (letter === '**********') {
           return ' ';
        }
        let arr = letter.replace(/^0+/, "").match(/(.{2})/g);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '11') {
                str += '-';
            } else if (arr[i] === '10') {
                str += '.'
            }
        }
        return MORSE_TABLE[str];
    }
    return arr.map((el) => codeLet(el)).join('')

}

module.exports = {
    decode
}