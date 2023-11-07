/*
Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

Example:
    For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

Input/Output:
    [time limit] 400ms (js)
    [input] array.integer inputArray
*/

// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.
// Solution:

const arrayToReplace = (inputArray, elementToReplace, substrationElem) => {
    inputArray.map((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = substrationElem;
        }
    });
    console.log(inputArray);
};

arrayToReplace([1, 2, 1], 1, 3);

// Output = [3, 2, 3].
