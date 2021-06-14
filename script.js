//cells are elements
//create cell rows 
//document.getElementById() === $()
//<td> table data cell element
//tr - row in a table
//col - column 
// @ @ @ @
// @ @ @ @ 
// ^ to add col - for each row add 1 elment to end of row
// ^ to add row - for each col add 1 element to bottom of the col
// createElement() cells
// use appendChild() to attach
// Node.childNodes - will contain all child elements &non-elements of an el on which called
// Node.lastElementChild - return last child element of an element
// document.querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.

//testing base logic for row/cell creation 
let grid = document.getElementByTagName('grid'); //selected table

var tr = document.createElement('tr');
var td = document.createElement('td');
tr[0].appendChild(td);
tr[1].appendChild(td);
tr[3].appendChild(td);

//---------------------------------------------//

let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    alert("Clicked Add Row")
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
