# NodeJS_CheckSudokuSolution

You're given a solution to a Sudoku puzzle.
The purpose of this code to check if it's a valid solution or not, written in Javascript/Nodejs.

Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid contains all of the digits from 1 to 9.

The logic i used here is

a) take each element in a row and put it into an array.
sort them in ascending order.
conevert the sorted array element in string.
Check the above string with '1,2,3,4,5,6,7,8,9' for exact match
If we get the match then , in that row every element is unique bewteen 1-to-9.
Check for each row, if at any point, it get's mis-match , then solution provided to this module is "INVALID" or "IN_CORRECT"

b) Then convert vertical column element (all 9 rows, 1st column, then 2nd, 3rd....till 9th column) into an array
and on them apply the logic a)

c) while converting coloumn elemement into an array, I am genarting another array, which contain all the element of 3x3 grid,
and on that array also applying logic a)

When both a,b,c are true, that means teh provided solution to this module is correct.
