var rect = require('./rectangle')

function testRect(x, y) {
    console.log("testing " + x + "," + y);
    rect(x, y, (error, rectObj) => {
        if(error) {
            console.log(x + "," + y + " - ERROR: " + error);
        }
        else {
            console.log(x + "," + y + " - success: a=" + rectObj.area() + " p=" + rectObj.perimeter());
        }

    });
}

testRect(1,5);
testRect(2,5);
testRect(-10,5);
testRect(1,-20);
testRect(2,2);
