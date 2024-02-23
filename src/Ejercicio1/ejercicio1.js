function isPalindrome(phrase){

    if(phrase === '') return 'La palabra no puede ser vacía'
    let phraseToLowercase = phrase.toLowerCase().replace(/[\W_]/g, '');
    let reservePhrase = phraseToLowercase.split('').reverse().join('');
    let res = reservePhrase === phraseToLowercase ? 'Es palíndroma' : 'No es palíndroma';
    console.log(res);
    return res;
}

isPalindrome('avion');

module.exports = isPalindrome;