// Select the span element and reset button
const tapCount = document.getElementById('tapCount');
const resetButton = document.getElementById('resetButton');


let count = 0;

document.body.addEventListener('click', (event) => {
    if (event.target !== resetButton) {
        count++;
        tapCount.textContent = count;
    }
});

resetButton.addEventListener('click', () => {
    // reset
    count = 0;

    tapCount.textContent = count;
});

console.log(tapCount)





// let tapCount = document.getElementById('tapCount').innerText;

// document.addEventListener('click', () => {
//     tapCount++;
//     // console.log(`Tap count: ${tapCount}`);
// });