        void setup() {

            size(400, 400);

            fill(126);

            background(102);

        }

        draw = function () {

            background(94, 72, 7); // wooden table
            ellipse(200, 200, 350, 350); // plate
            ellipse(200, 200, 300, 300);

            noStroke();
            //body
            fill(242, 224, 29);
            ellipse(190, 193, 76, 247);
            ellipse(198, 193, 76, 247);

            //eyes
            fill(255, 255, 255);
            stroke(0, 0, 0);
            ellipse(157, 160, 60, 60);
            ellipse(224, 160, 60, 60);
            //retinas
            fill(0, 0, 0);
            noStroke();
            ellipse(157, 160, 15, 15);
            ellipse(224, 160, 15, 15);


            //lines at bottom
            stroke(0, 0, 0);
            line(189, 315, 179, 302);
            line(203, 314, 219, 287);
            line(198, 315, 201, 301);


            /*
            note: the stop had to be adjusted from original editor
            Syntax:
                arc(x, y, width, height, start, stop)
            Parameters:	
                x	int or float: x-coordinate of the arc's ellipse
                y	int or float: y-coordinate of the arc's ellipse
                width	int or float: width of the arc's ellipse
                height	int or float: height of the arc's ellipse
                start	int or float: angle to start the arc, specified in radians or degrees depending on the current angle mode
                stop	int or float: angle to stop the arc, specified in radians or degrees depending on the current angle mode
            */
            // mouth/smile 
            fill(242, 224, 29);
            stroke(0, 0, 0);
            arc(220, 221, 27, 20, -2, 0.8);
            arc(186, 222, 80, -48, -2.1, 0);

            // top hat
            fill(0, 0, 0);
            rect(153, 75, 86, 10);
            fill(17, 140, 128);
            rect(163, 64, 68, 10);
            fill(0, 0, 0);
            rect(163, 17, 68, 50);


            fill(0, 0, 0);
            fill(255, 255, 255);
        }
