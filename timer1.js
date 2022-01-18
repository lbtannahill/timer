
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
