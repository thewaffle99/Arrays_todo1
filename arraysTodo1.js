arr = [7, 3, 5, 6, 2, 1];
val = 56;

function pushFront(arr, val) {
  for (var i = arr.length; i > -1; --i) {
    if (i >= 1) {
      arr[i] = arr[i - 1];
    } else {
      arr[i] = val;
    }
  }
  return arr;
}

console.log(pushFront(arr, val));

// arr = [7, 3, 5, 6, 2, 1];
// val = 56;

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popAndReturnFront(arr) {
//   tempVal = arr[0];
//   for
//   return tempVal;
// }

// function popFront(arr) {
//   var returnVal = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr.pop(); // Remove the last value
//   return returnVal;
// }
// console.log(popFront(arr));
// console.log(arr);

// arr = [3, 5, 6, 2, 1];
// val = 56;

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, index, val) {
//   for (var i = arr.length - 1; i >= index; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[index] = val;
//   return arr;
// }

// console.log(insertAt(arr, 4, val));
