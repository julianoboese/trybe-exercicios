// Programa 1
const a = 30;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Programa 2
const c = 30;
const d = 10;
let result;

if (c > d) {
  result = c;
} else {
  result = d;
}

console.log(result);

// Programa 3
const e = 30;
const f = 10;
const g = 20;

if (e > f) {
  if (e > g) {
    result = e;
  } else {
    result = g;
  }
} else if (f > g) {
  result = f;
} else {
  result = g;
}

console.log(result);

// Programa 4
// Utilizando if
const h = 0;

if (h > 0) {
  result = "positive";
} else if (h < 0) {
  result = "negative";
} else {
  result = "zero";
}

console.log(result);

// Utilizando switch
switch (h / Math.abs(h)) {
  case 1:
    result = "positive";
    break;
  case -1:
    result = "negative";
    break;
  default:
    result = "zero";
    break;
}

console.log(result);

// Programa 5
const angle1 = 60;
const angle2 = 90;
const angle3 = 30;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  result = "Error: all the angles must be positive";
} else if (angle1 >= 180 || angle2 >= 180 || angle3 >= 180) {
  result = "Error: no angle can be greater than 180";
} else if (angle1 + angle2 + angle3 === 180) {
  result = true;
} else {
  result = false;
}

console.log(result);

// Programa 6
const chessPiece = "Queen";

switch (chessPiece.toLocaleLowerCase()) {
  case "king":
    result =
      "Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.";
    break;
  case "queen":
    result =
      "Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.";
    break;
  case "rook":
    result =
      "Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.";
    break;
  case "knight":
    result =
      "Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.";
    break;
  case "bishop":
    result =
      "Bishops move diagonally any number of squares. They are unable to jump over pieces.";
    break;
  case "pawn":
    result =
      "Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.      Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.";
    break;
  default:
    result = "Choose a Chess Piece";
    break;
}

console.log(result);

// Programa 7
const grade = 80;

if (grade > 100 || grade < 0) {
  result = "The grade must be between 0 and 100";
} else if (grade >= 90) {
  result = "A";
} else if (grade >= 80) {
  result = "B";
} else if (grade >= 70) {
  result = "C";
} else if (grade >= 60) {
  result = "D";
} else if (grade >= 50) {
  result = "E";
} else {
  result = "F";
}

console.log(result);

// Programa 8
const i = 30;
const j = 17;
const k = 21;

if (i % 2 === 0 || j % 2 === 0 || k % 2 === 0) {
  result = true;
} else {
  result = false;
}

console.log(result);

// Programa 9
const l = 30;
const m = 10;
const n = 21;

if (l % 2 === 0 && m % 2 === 0 && n % 2 === 0) {
  result = false;
} else {
  result = true;
}

console.log(result);