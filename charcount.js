//A function to count the number of each character in a given string;

input = process.argv[2];

function countChars(str){
  var output = {};
  for(var char of str){
    if (output[char]){
      output[char] += 1;
    }
    else if (char === ' '){

    }
    else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(countChars(input));