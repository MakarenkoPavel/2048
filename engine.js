//var board [][];
//var buffer[];

var row = 5;
var col = 4;

function createMatrix(row, col) {
    var array = [];
    for(var i = 0; i < row; i++) {
      array[i] = [];
      for(var j = 0; j < col; j++) {
        array[i][j] = null;
      }
    }
    return array;
}

var item = document.getElementById("value");


addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 37:
      console.log("left");
      break;
    case 38:
      console.log("up");
      break;
    case 39:
      console.log("right");
      break;
    case 40:
      console.log("down");
      break;
    default:
      console.log("undefinite");
  }
});
