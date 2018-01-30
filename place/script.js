var arr = [];
var buffer = [];

function entryArray() {
    for( var i = 0; i < 4; i++ ) {
        arr[i] = [];
        for( var j = 0; j < 4; j++) {
            var memory = document.getElementById("c" + toLine(i, j, 4));
            arr[i][j] = Number(memory.textContent);
        }
    }
}

function down() {
   for( var i = 0; i < 4; i++ ) {
       for( var j = 0; j < 4; j++ ) {
           buffer[j] = arr[i][j];
       }

       move();
       summ();
       move();
       for( var j = 0; j < 4; j++) {
           arr[i][j] = buffer[j];
       }
   }
   test();
}

function left() {
    for( var j = 0; j < 4; j++) {
        for( var i = 3; i >= 0; i--) {
            buffer[3-i] = arr[i][j];
        }
    
        move();
        summ();
        move();
        for( var i = 3; i >= 0; i-- ) {
            arr[i][j] = buffer[3-i];
        }
    }
    test();
}

function up() {
    for(var i = 0; i < 4; i++ ) {
        for(var j = 3; j >= 0; j-- ) {
            buffer[3-j] = arr[i][j];
        }    
        move();
        summ();
        move();
        for( var j = 3; j >= 0; j-- ) {
            arr[i][j] = buffer[3-j];
        }
    }
     test();
}

function right() {
    for( var j = 0; j < 4; j++ ) {
       for( var i = 0; i < 4; i++ ) {
            buffer[i] = arr[i][j];
       }
        move();
        summ();
        move();
        for( var i = 0; i < 4; i++) {
            arr[i][j] = buffer[i];
        }
    }
     test();
}



function rewrite() {
    for( var i = 0; i < 4; i ++) {
        for( var j = 0; j < 4; j++) {
            var number = document.getElementById("c" + toLine(i, j, 4));
            var place = document.getElementById("i" + toLine(i, j, 4));
            number.textContent = arr[i][j];
            if( arr[i][j] != 0) {
                place.style.backgroundColor = "#FFB901";
            }
            else  {
                place.style.backgroundColor = "#F4CD64";
            }
        }
    }
}

function test() {
    for( var i = 0; i < 4; i++ ) {
        for( var j = 0; j < 4; j++) {
            if(arr[i][j] == 0) {
                arr[i][j] = ' ';
            }
        }
    }
}

function summ() {
    console.log(buffer);
    for( var i = 0; i < 3; i++) {
        if( buffer[i] == buffer[i+1] ) {
            buffer[i+1] *=2;
            buffer[i] = 0;
            break;
        }
    }
    console.log(buffer);
    console.log("-------");
}

function move() {
    for( var i = 3; i >= 0; i--) {
        if( buffer[i] != 0 ) continue; 
        for( var j = i-1; j >= 0; j--) {
            if( buffer[j] != 0 ) {
                var temp = buffer[i];
                buffer[i] = buffer[j];
                buffer[j] = temp;
                break;
            }
        }
    }
}

function toLine(x, y, width) {
    return y*width + x;
}

function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max - min - 1)) + min;
}

function addElement() {
    while(1) {
        var number = getRandomInt(0, 15);
        var n = document.getElementById("c" + number);
        var c = document.getElementById("i" + number);
        console.log(number);
        console.log(n);

        if(n.textContent != 0) {
            continue;
        }
        else {
            num = getRandomInt(2,4);
            console.log(num);     
            n.textContent = num;
            c.style.backgroundColor = "#FFB901";
            console.log(n);
            break;
        }
    }
    console.log("good");
}

addEventListener("keydown", function(event) {
    if( event.keyCode == 40 ) {
        entryArray();
        down();
        rewrite();
        addElement();

        //console.log(buffer);
        //console.log(arr);
        //console.log("down");
    }
    if( event.keyCode == 38 ) {
        entryArray();
        up();
        rewrite();
        addElement();

        //console.log(buffer);
        //console.log(arr);
        //console.log("up");
    }
    if( event.keyCode == 37 ) {
        entryArray();
        left();
        rewrite();
        addElement();

        //console.log(buffer);
        //console.log(arr);
        //console.log("left");
    }
    if( event.keyCode == 39) {
        entryArray();
        right();
        rewrite();
        addElement();

        //console.log(buffer);
        //console.log(arr);
        //console.log("right");
    }
});


//console.log(arr[11].textContent);
//console.log(arr[6].textContent);

//arr[6].textContent = 8;
//console.log(arr[6].textContent);