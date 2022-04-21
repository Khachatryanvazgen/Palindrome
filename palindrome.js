let text = prompt("Enter the text to check is a palindrome or no");
function isPalindrome(text) {
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i].toLowerCase() !== text[text.length - 1 - i].toLowerCase()) {
      alert("Your text is not Palindrome");
      return false;
    } else {
      alert("Your text is a Palindrome");
      return true;
    }
  }
}
console.log(isPalindrome(text));