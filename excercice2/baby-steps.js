const argumentList = process.argv.slice(2);
const sum = argumentList.reduce((acc,curr)=> {
  return +acc+ + curr
}); 
console.log(sum)

// const path = require('path'); 
// const argumentList = [200,100,50,50]

// const file = path.basename('C:\\temp\\myfile.html');
// let sum = 0;
// let solution = argumentList.forEach((value) => {
//   // convert to a number
//   sum += value;
//   return sum;
// });

// console.log([file, "The sum = " + sum]);




