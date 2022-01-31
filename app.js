//  ===== setInterval ====

// const timerIntervalID = setInterval(function(){
//     console.log('Fired');
// },1000);

// clearInterval(timerIntervalID) // остановитца

// ====== setTimeOut =====

// const timerID = setInterval(function(){
//     console.log('setTimeout Fired');
// },2000);

// clearInterval(timerID);

// ===== setInterval + setTimeOut ======

// const timerID = setInterval(() => {
//     console.log('setInterval Fired!');
// },1000)

// setTimeout(() => {
//     clearInterval(timerID)
// }, 10000);

// ======= Секундомер =======

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

// setInterval(() => {
//     // counter = counter + 1;
//     // counter += 1;
//     counter++;
//     counterElement.innerText = counter;
// }, 1000);

// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function(){
        timerID = setInterval(() => {
        counter++;
        counterElement.innerText = counter;
    }, 1000);
}

// Пауза
const btnStop = document.querySelector('#stop');
btnStop.onclick = function() {
    console.log('btnStop');
    clearInterval(timerID);
}

// Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function() {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID)
}
