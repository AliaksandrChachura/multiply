module.exports = function multiply(first, second) {
        let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  let arr = [];
  for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j <secondArr.length; j++){
          if (arr[i + j]){
              arr[i + j] += firstArr[i] * secondArr[j];
          }
          else {
              arr[i+j] =firstArr[i] * secondArr[j];
          }
      }
  }
  for (let i = 0; i < arr.length - 1; i++) {
      arr[i+1] = arr[i+1] + Math.floor(arr[i]/10);
      arr[i] = arr[i]%10;
  }
return arr.reverse().join('');
      
  }
