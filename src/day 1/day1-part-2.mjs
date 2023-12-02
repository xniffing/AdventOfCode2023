/**
 * --- Day 1: Advent of Code 2023 Part 2---
 * --- Example data:
 */

let data = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`


let digitWords = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}

function combineAndSumEachDigitPerLine(data, digitWords) {
    return data.split('\n').reduce((acc, line) => {
        let firstDigit = null;
        let lastDigit = null;
        let currentWord = '';

        for (let char of line) {
            if (firstDigit !== null) {
                break;
            }

            if (isNaN(char)) {
                currentWord += char;
                let matchingKeys = Object.keys(digitWords).filter(word => currentWord.endsWith(word));
                if (matchingKeys.length > 0) {
                    firstDigit = digitWords[matchingKeys[0]];
                    currentWord = '';
                }
            } else {
                firstDigit = char;
            }
        }

        currentWord = '';
        for (let i = line.length - 1; i >= 0; i--) {
            let char = line[i];
            if (isNaN(char)) {
                currentWord = char + currentWord;
                let matchingKeys = Object.keys(digitWords).filter(word => currentWord.startsWith(word));
                if (matchingKeys.length > 0) {
                    lastDigit = digitWords[matchingKeys[0]];
                    break;
                }
            } else {
                lastDigit = char;
                break;
            }
        }

        return acc + Number(firstDigit + lastDigit);
    }, 0);
}

export let result = combineAndSumEachDigitPerLine(data, digitWords);