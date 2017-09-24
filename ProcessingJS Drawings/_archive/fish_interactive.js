        void setup() {

            size(400, 400);

            fill(126);

            background(102);

        }


        var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {

            noStroke();
            fill(bodyColor);
            // body
            ellipse(centerX, centerY, bodyLength, bodyHeight);
            // tail
            fill(color(mouseX, mouseY, mouseX));
            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            triangle(centerX - bodyLength / 2, centerY,
                centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
                centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
            // eye
            fill(33, 33, 33);
            ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
        };


        var draw = function () {
            background(89, 216, 255);
            drawFish(200, 100, 118, 74, color(162, 0, 255));
            drawFish(210, 300, 118, 74, color(162, 0, 255));
            drawFish(225, 200, 118, 74, color(162, 0, 255));

        };


        var mouseClicked = function () {
            drawFish(mouseX, mouseY, 118, 74, color(162, 0, 255));
        };
