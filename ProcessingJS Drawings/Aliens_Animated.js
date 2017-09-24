        void setup() {

            size(400, 400);

            fill(126);

            background(102);

        }


var xPos = 200;
var yPos = 200;

var r = 255; 
var g = 242; 
var b = 0; 


draw = function() {
    background(40, 49, 105);
    fill(r, g, b);
    ellipse(xPos, yPos, 80, 80);
    fill(18, 17, 17);
    ellipse(xPos + 16 , yPos + 10, 48, 18
    );
        ellipse(xPos + -12 , yPos + -14, 8, 8
    );
        ellipse(xPos + 20 , yPos + -13, 8, 8
    );
    
    fill(255,255,255);
    text("ALIENS!!!",xPos - 23 , yPos - 46); 
  
    if(xPos < 390 || yPos < 390) 
        {xPos += 2;
        yPos += 1;
        } 
    else {
        xPos = 0;
        yPos = random(0,35) * random(0,10);
        r = random(0,255); 
        g = random(0,255); 
        b = random(0,255); 
        }
    
};



