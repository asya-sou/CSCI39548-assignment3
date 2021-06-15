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
var grid = document.getElementById('grid'); //selected table


//---------------------------------------------//
let numRows = 0;
let numCols = 0;
let colorSelected; 

//------------------------------Adds a row ------------------------------//
function addR() {
//>>>>>>>>>>>>>>>>>>>>>>> remove alert
    //alert('bf call: rows ' +  numRows + ' cols ' + numCols);
    numCols = (numCols === 0) ? 1 : numCols; //if 0 columns, set to 1

    let row = grid.insertRow();//define row
    grid.appendChild(row); //add to grid

    for (let i = 0; i < numCols; i++){ //for every column
        let cell = row.insertCell(i); //define a cell
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>remove/replace text node? 
        let text = document.createTextNode(':)'); 
        cell.appendChild(text);
    }
    numRows += 1;//update number of rows (add 1)
   
}

//------------------------------Adds a column ------------------------------//
function addC() {
//>>>>>>>>>>>>>>>>>>>>>>> remove alert
    //alert('bf call: rows ' +  numRows + ' cols ' + numCols);
    if (numRows === 0) { //if no wows yet - create one
        addR();
    }

    else {
        for (let i = 0; i < numRows; i++) { //for every row 
            let cell = grid.rows[i].insertCell(i); //add a cell
            let text = document.createTextNode(':)'); 
            cell.appendChild(text);
        }
        numCols += 1;//update number of cols (add 1)
    }
}

//------------------------------Removes a row ------------------------------//
function removeR() {
    if (numRows > 0) {//if there is smth to delete
        let lastRowI = numRows - 1;//set index to last row number

        grid.deleteRow(lastRowI);//removes LAST row

        numRows -= 1; //decrease number of rows
        numCols = (numRows === 0)? 0 : numCols;
    }
}

//------------------------------Removes a column ------------------------------//
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
