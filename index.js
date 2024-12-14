// Select the span element and reset button
const tapCount = document.getElementById('tapCount');
const resetButton = document.getElementById('resetButton');

// Initialize the count variable
let count = 0;

// Add an event listener to the body for tap (click) events
document.body.addEventListener('click', (event) => {
    if (event.target !== resetButton) {
        count++;
        tapCount.textContent = count;
    }
});

// Add an event listener to the reset button
resetButton.addEventListener('click', () => {
    // Reset the count to 0
    count = 0;

    // Update the text content of the span
    tapCount.textContent = count;
});

console.log(tapCount)





// let tapCount = document.getElementById('tapCount').innerText;

// document.addEventListener('click', () => {
//     tapCount++;
//     // console.log(`Tap count: ${tapCount}`);
// });