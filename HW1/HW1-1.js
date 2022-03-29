function transform(array){
  for(var i =0; i<array.length; i++){
    for(var j = i+1; j<array.length; j++){
      if (array[i]> array[j]){          //for sorting
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  //for squaring the contents of the array
  for (var i=0; i<array.length; i++){
    array[i] = array[i]* array[i]
  } 
  return array
}

array = [99, 98, 97, 96, 100] // hard coded array

console.log(transform(array))


