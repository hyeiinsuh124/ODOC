
let arr = [10, 5];

var firstNum = arr[0]
var secondNum = arr[1]

if(firstNum - secondNum > 0) {
    arr = [secondNum, firstNum]
}
else {
    arr;
}

let sum = 0;

for(var i = arr[0]; i <= arr[1]; i++) {
    sum = sum + i;
}

console.log(sum)
