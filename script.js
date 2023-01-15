// complete the given function

function palindrome(str){
    str=str.toLowerCase();
    strArr=str.split("");
    strArr.reverse();
    let strRev=strArr.join(''); 
    if(str===strRev) return true;
    return false;
}


module.exports = palindrome
