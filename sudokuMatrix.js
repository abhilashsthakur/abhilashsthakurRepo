
function sudokuSolver(sudokumatrix) {
	let possibleNumbers = {},notThese = [], empty = 0, empties = 81, count = 0;
	while (empties && count < 20) {
		empties = 0;
		for (var vert = 0; vert < sudokumatrix.length; vert++) {
			for (var hor = 0; hor < sudokumatrix.length; hor++) {
				if (!sudokumatrix[vert][hor]) {
					possibleNumbers = {};
					for (var check = 0; check < sudokumatrix.length; check++) {
						if (sudokumatrix[vert][check]) {
							possibleNumbers[sudokumatrix[vert][check]] = true;
						}
						if (sudokumatrix[check][hor]) {
							possibleNumbers[sudokumatrix[check][hor]] = true;
						}
					}
					for (var boxVert = Math.floor(vert / 3) * 3; boxVert < Math.floor(vert / 3) * 3 + 3; boxVert++) {
						for (var boxHor = Math.floor(hor / 3) * 3; boxHor < Math.floor(hor / 3) * 3 + 3; boxHor++) {
							if (sudokumatrix[boxVert][boxHor]) {
								possibleNumbers[sudokumatrix[boxVert][boxHor]] = true;
							}
						}
					}
					notThese = Object.keys(possibleNumbers);
					if (notThese.length == 8) {
						for (var i = 1; i <= 9; i++) {
							if (notThese.indexOf(i.toString()) < 0) {
								sudokumatrix[vert][hor] = i;
							}
						}
					} else {
						empties++;
					}
				}
			}
		}
		count++;
	}
	return sudokumatrix;
}
var puzzle = [
            [5,3,0,0,7,0,0,0,2],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

console.log(sudokuSolver(puzzle));