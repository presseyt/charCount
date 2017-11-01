// a function that takes a string
//   and returns an objects containing the number of occuences of each character and the indices of all the occurences


function countChars(str){
  var output = {};
  for(var i = 0; i < str.length; i++){
    if (output[str[i]]){
      output[str[i]].num += 1;
      output[str[i]].pos.push(i);
    }
    else if (str[i] === ' '){

    }
    else {
      output[str[i]] = {num: 1, pos: [i]};
    }
  }
  return output;
}

input = process.argv[2];
console.log(countChars(input));