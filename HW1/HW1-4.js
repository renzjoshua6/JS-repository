function isPalindrome(str){

  //code for reversing a string
    let reverseString = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
  // comparing the input string and the reversed string
  if (reverseString === string){
    return 'True'
  } else { 
    return 'False'
  }
}

// take input from the user
const userInput = prompt('Enter a string: ');
string = userInput.toLowerCase()
console.log(isPalindrome(string))
