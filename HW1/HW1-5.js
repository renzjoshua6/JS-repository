function convertToVowel(str){
  
  //for matching vowels in a string
  const vowels = str.match(/[aeiou]/gi) 

  // to have a string output
 vowelsOutput = ""
  for(var i =0; i< vowels.length; i++){
    vowelsOutput += vowels[i] 
  }
 return vowelsOutput
}

// user input
const string = prompt('Enter a String: ')
console.log(convertToVowel(string))
