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
//document.getElementById('td').onclick = function() {
  // this.style.background = "black";
//}

//---------------------------------------------//
let numRows = 0;
let numCols = 0;
let colorSelected; 
//------------------------------Adds a row ------------------------------//
function addR() {
//>>>>>>>>>>>>>>>>>>>>>>> remove alert
    //alert('bf call: rows ' +  numRows + ' cols ' + numCols);
    //numCols = (numCols === 0)? 1 : numCols; //if 0 columns, set to 1
    if (numCols === 0) {numCols = 1}; //if 0 columns, set to 1

    let row = grid.insertRow();//define row
    grid.appendChild(row); //add to grid

    for (let i = 0; i < numCols; i++){ //for every column
        let cell = row.insertCell(0); //define a cell

        let text = document.createTextNode(':)');//create text element
        cell.appendChild(text);//add text to cell
        
        //clicked cell behavior
        cell.onclick = function() {
            cell.style.background = colorSelected;
            cell.id = colorSelected;  
        }
    }
    numRows++;//update number of rows
}

//------------------------------Adds a column ------------------------------//
function addC() {
//>>>>>>>>>>>>>>>>>>>>>>> remove alert
    //alert('bf call: rows ' +  numRows + ' cols ' + numCols);
    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) { //for every row 
            let cell = grid.rows[i].insertCell(0); //add a cell

            let text = document.createTextNode(':)');//create text element
            cell.appendChild(text);//add text to cell

            //cell clicked behavior
            cell.onclick = function() {
                cell.style.background = colorSelected;
                cell.id = colorSelected;
            }
        }
        numCols++;//update number of cols
    }
    
    else if (numRows === 0) { //if no rows yet - create one
        addR();
    }
}

//------------------------------ Removes last row ------------------------------//
function removeR() {
    if (numRows > 0) {//if there is smth to delete
        
        let lastRowI = numRows - 1;//set index to last row number
        
        //update DOM
        while (grid.rows[lastRowI].firstChild) {//while any children left, remove cells from DOM
            grid.rows[lastRowI].removeChild(grid.rows[lastRowI].firstChild)
        }
        grid.removeChild(grid.rows[lastRowI]);//remove rows

        numRows--; //decrease number of rows
        numCols = (numRows === 0)? 0 : numCols; //if no rows left - set cols to 0
    }
}

//------------------------------ Removes last column ------------------------------//
function removeC() {
    if (numCols > 0) { //if there is something to delete
        let lastCellI = numCols -1; //set index to last col 

        //delete using DOM
        for (let i=0; i < numRows; i++){//for every row
        grid.rows[i].removeChild(grid.rows[i].firstChild); //removes first child cellell}
        }

        numCols--; 
    }

    if (numCols === 0 ) { // if one column left, delete all rows
        for (let i = numRows; i > 0; i--) {
            removeR();
        }
        
    }
}

//------------------------------ sets global var for selected color ------------------------------//
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//------------------------------ Changes colors of ALL cells to color selected ------------------------------//
function fill(){
    var cells = document.getElementsByTagName('td');
    for (let i = 0; i < (numCols * numRows); i++){
        cells[i].style.background = colorSelected;
        cells[i].id = colorSelected;
    }

}
//------------------------------ sets all cell bg color to white ------------------------------//
function clearAll(){
    var cells = document.getElementsByTagName('td'); //get cells by tag name

    for (let i = 0; i < (numCols * numRows); i++){ //for every cell
        if(cells[i].id !=='')//if cell id not empty
            cells[i].style.background = 'white'; //change background color to selected
            cells[i].id = ''; //assign color id
    }
}

//------------------------------ Changes colors of Uncolored cells to color selected ------------------------------//
function fillU(){
    //alert("Clicked Fill All Uncolored")
    var cells = document.getElementsByTagName('td'); //get cells by tag name

    for (let i = 0; i < (numCols * numRows); i++){ //for every cell
        if(cells[i].id ===''){ //if cell id empty
            cells[i].style.background = colorSelected; //change background color to selected
            cells[i].id = colorSelected; //assign color id
        }
    }
}

