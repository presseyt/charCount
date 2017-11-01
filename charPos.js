// a function that takes a string
//   and returns an objects containing the number of occuences of each character and the indices of all the occurences


function countChars(str){
  var output = {};
  for(var i = 0; i < str.length; i++){
    if (output[str[i]]){
      output[str[i]].occurances += 1;
      output[str[i]].indices.push(i);
    }
    else if (str[i] === ' '){

    }
    else {
      output[str[i]] = {occurances: 1, indices: [i]};
    }
  }
  return output;
}

input = process.argv[2];
console.log(countChars(input));
console.log(Object.keys(countChars(input)).length);