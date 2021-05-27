
const sum = function(array) {
    if (array.length === 1) {
      return array[0];
    }
    else {
      return array.pop() + sum(array);
    }
  };

  const array = [1,2,3,4,5,6]

  console.log(sum(array));