// debugger;
// let text = 'Anna';
// function isPalindrome(text) {
//   for (let i = 0; i < text.length / 2; i++) {
//     if (text[i].toLowerCase() !== text[text.length - 1 - i].toLowerCase()) {
//       alert("Your text is not Palindrome");
//     }else{
//       alert("Your text is  Palindrome");
//     }
//   }
// }
// // console.log(isPalindrome(text));


let text = prompt('Enter');

function isPlaindrome(text) {
    let status = true;
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i].toLowerCase() != text[text.length - 1 - i].toLowerCase()) {
            status = false;
            break;
        }
    }

    return status;
}

console.log(isPlaindrome(text));