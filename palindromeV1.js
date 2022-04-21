let text = prompt("Enter the text to check is a Palindrome or no");
function isPalindrome(text) {
    for (let i = 0; i < text.length / 2; i++) {
        if (text === text.split("").reverse().join("")){
            alert("Your text is a Palindrome")
            return false;
        } else {
            alert("Your text is not Palindrome")
            return true;
        }
    }
}
console.log(isPalindrome(text.toLowerCase()));