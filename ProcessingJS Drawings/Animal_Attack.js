        void setup() {

            size(400, 400);

            fill(126);

            background(102);

        }


        noStroke();

        var bodySize = 1.0;

        var bodyX = 176;
        var bodyY = 250;
        var bodyW = 161 * bodySize;
        var bodyH = bodyW;

        var lineY = 370;
        var lineX1 = 50;

        draw = function () {
            background(207, 254, 255);


            fill(12, 81, 110);
            rect(0, 307, 400, 100);

            stroke(255, 255, 255);

            line(lineX1 * 0.95, lineY, lineX1 * 5, lineY);
            line(lineX1 * 1.5, lineY * 0.93, lineX1 * 6, lineY * 0.93);
            line(lineX1, lineY * 1.05, lineX1 * 6, lineY * 1.05);


            noStroke();

            fill(240, 209, 36);
            ellipse(bodyX, bodyY, bodyW, bodyH);

            ellipse((bodyX + bodyX / 6), (bodyY - bodyY / 2), (bodyW - bodyW / 9), (bodyH - bodyW / 3));

            fill(0, 0, 0);
            arc((bodyX + bodyX / 4.2), (bodyY - bodyY / 2), (bodyW / 1.5), (bodyH / 1.5), 0.25, 1.5);

            fill(255, 255, 255);
            ellipse((bodyX + bodyX / 4), (bodyY - bodyY / 1.5), (bodyW / 5), (bodyH / 5));

            fill(0, 0, 0);
            ellipse((bodyX + bodyX / 4), (bodyY - bodyY / 1.5), (bodyW / 8), (bodyH / 8));

            stroke(12, 81, 110);
            noFill();

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

            arc((bodyX * 0.9), (bodyY * 0.9), bodyW, (bodyH * 0.9), 0, 2);
            arc((bodyX * 0.8), (bodyY * 0.9), (bodyW * 0.9), (bodyH * 0.9), 0, 1.5);

            noStroke();
        };
