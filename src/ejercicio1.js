function isPalindrome(phrase){

    let phraseToLowercase = phrase.toLowerCase().replace(/[\W_]/g, '');
    let reservePhrase = phraseToLowercase.split('').reverse().join('');
    let res = reservePhrase === phraseToLowercase ? 'Es palíndroma' : 'No es palíndroma';
    console.log(res);
}

isPalindrome('avion');