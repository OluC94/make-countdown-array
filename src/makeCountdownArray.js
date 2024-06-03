// Pseudocode:

// Declare function makeCountdownArray, with parameters
// inputNumber and a string (emoji).

//     Declare RESULT as an empty array
    
//     Start counted for loop, starting from inputNumber.
    
//         Push each number to RESULT
//         Decrement inputNumber by 1
    
//     Push emoji to RESULT

//     Return RESULT

function makeCountdownArray(inputNumber, emoji) {
    const result = [];
    while (inputNumber > 0) {
        result.push(inputNumber--);
    }
    result.push(emoji);
    return result;
}

export { makeCountdownArray };