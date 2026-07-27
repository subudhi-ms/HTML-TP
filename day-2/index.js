const outputEl = document.getElementById('output');

function print(text) {
  outputEl.textContent += text + '\n';
}

function clearOutput() {
  outputEl.textContent = '';
}


function getParsedInput() {
  const inputVal = document.getElementById('userInput').value.trim();

  if (!isNaN(inputVal) && inputVal !== '') {
    const limit = parseInt(inputVal);
    const arr = Array.from({ length: limit }, (_, i) => i);
    return { limit, arr, isNumeric: true };
  }

  const arr = inputVal.split(',').map(item => item.trim()).filter(item => item !== '');
  return { limit: arr.length, arr, isNumeric: false };
}

function runFor() {
  clearOutput();
  const data = getParsedInput();
  print(`--- For Loop (i < ${data.limit}) ---`);
  for (let i = 0; i < data.limit; i++) {
    print(data.isNumeric ? `i = ${i}` : `Index ${i}: ${data.arr[i]}`);
  }
}

function runWhile() {
  clearOutput();
  const data = getParsedInput();
  print(`--- While Loop (i < ${data.limit}) ---`);
  let i = 0;
  while (i < data.limit) {
    print(data.isNumeric ? `i = ${i}` : `Index ${i}: ${data.arr[i]}`);
    i++;
  }
}

function runDoWhile() {
  clearOutput();
  const data = getParsedInput();
  print(`--- Do-While Loop (runs at least once) ---`);
  if (data.limit === 0) {
    print("(Note: Input is empty, but do-while executes once anyway)");
  }
  let i = 0;
  do {
    print(data.isNumeric ? `i = ${i}` : `Index ${i}: ${data.arr[i] || 'undefined'}`);
    i++;
  } while (i < data.limit);
}

function runForIn() {
  clearOutput();
  const data = getParsedInput();
  print(`--- For...In Loop (Iterates over keys) ---`);
  for (let index in data.arr) {
    print(`Key/Index: ${index} -> Value: ${data.arr[index]}`);
  }
}

function runForOf() {
  clearOutput();
  const data = getParsedInput();
  print(`--- For...Of Loop (Iterates over values) ---`);
  for (let value of data.arr) {
    print(`Value: ${value}`);
  }
}
function runForEach() {
  clearOutput();
  const data = getParsedInput();
  print(`--- forEach Loop (Callback) ---`);
  data.arr.forEach((item, index) => {
    print(`item: ${item} at index ${index}`);
  });
}


function sum1(a, b) {
  return a + b;
}

const sum2 = (a,b)=>{
  return a + b;
}

const sum3 = (a,b)=> a+b;


const sum = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const div = (a,b)=> a/b;
const mul = (a,b)=> a*b;

console.log(sum(1,2))
console.log(sub(1,2))
console.log(div(1,2))
console.log(mul(1,2))