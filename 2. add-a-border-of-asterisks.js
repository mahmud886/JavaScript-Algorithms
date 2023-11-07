/*
Give a rectangular matrix of characters, add a border of asterisks(*) to it. 
Example

picture = [“abc”, “ded”]

addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]

*/

// solution

const addBorder = (pictures) => {
    let star = '*'.repeat(pictures[0].length);

    pictures.push(star);
    pictures.unshift(star);

    for (let i = 1; i < pictures.length - 1; i++) {
        pictures[i] = '*'.concat(pictures[i], '*');
    }
    return pictures;
};

console.log(addBorder(['Hello', 'Mello']));
