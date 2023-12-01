/**
 * --- Day 1: Advent of Code 2023 ---
 * --- Example data:
 */

let data = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

/**
 * Combines the first and last digit on each line of the given data and returns their sum.
 * 
 * @param {string} data - The input data containing lines with digits.
 * @returns {number} - The sum of the first and last digit on each line.
 */
function combineAndSumEachDigitPerLine(data) {
    // Split the data into lines and reduce the lines to a single value
    return data.split('\n').reduce((acc, line) => {
        // Find the first and last digit on each line
        let firstDigit = null;
        let lastDigit = null;
        // Loop through each character on the line
        for (let char of line) {
            // Check if the character is a digit
            if (!isNaN(char)) {
                // If the first digit has not been set, set it
                if (firstDigit === null) {
                    firstDigit = char;
                }
                // Set the last digit to the current character
                lastDigit = char;
            }
        }
        // Return the sum of the first and last digit on the line
        return acc + Number(firstDigit + lastDigit);
    }, 0);
}

export let result = combineAndSumEachDigitPerLine(data);// 46