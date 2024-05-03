/*Write a program that creates a string that represents an 8×8 grid, 
using newrow characters to separate rows. At each position of the grid there is 
either a space or a "#" character. 
The characters should form a chessboard.*/

let size = 8;
let artist = "";
for (let column = 0; column < size; column += 1) {
  for (let row = 0; row < size; row += 1) {
    if ((row + column) % 2 == 0) {
      artist += " "
    }
    else {
      artist += "#"
    }
  }
  artist += "\n"
}
console.log(artist)