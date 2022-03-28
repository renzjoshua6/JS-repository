function reverse(str) {

    // empty string for initialization 
    let reverseString = ""
  // for loop for reversing the string
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    return reverseString
}

// take input from the user
const string = prompt('Enter a string: ')

console.log(reverse(string))
