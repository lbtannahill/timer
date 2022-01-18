
// // take off first two of input , sort in order
// const input = process.argv.slice(2);
// input.sort();

// // loop through 

// for (let j = 0; j < input.length; j++) {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, j)
// };

const setTimer = function() {

const input = process.argv.slice(2);
// console.log(input)

for (const number of input) {
  const time = Number(number) * 1000
  //  console.log(time) 
  if (Number.isNaN(time) || time <= 0) {
    return
  } else {
    setTimeout(() => {
        process.stdout.write('.');
      }, time)
  }
  } };

setTimer();

//  if (number > 0) {
//   setTimeout(() => {
//     process.stdout.write(`.`);
//   }, input[number])
// }
// process.stdout.write('')
// };
