        void setup() {

            size(400, 400);

            fill(126);

            background(102);

        }


        var xPositions = [];
        var yPositions = [];
        var colors = [];

        for (var i = 0; i < 25; i++) {
            xPositions.push(random(0, 400));
            yPositions.push(random(0, 400));
            colors.push(color(random(0, 255), random(0, 255), random(0, 255)));
        }


        mouseClicked = function () {
            xPositions.push(mouseX);
            yPositions.push(mouseY);
            colors.push(color(random(0, 255), random(0, 255), random(0, 255)));
        };

        draw = function () {
            background(204, 247, 255);

            for (var i = 0; i < xPositions.length; i++) {
                noStroke();
                fill(colors[i]);
                ellipse(xPositions[i], yPositions[i], 10, 10);
                yPositions[i] += 5;

                if (yPositions[i] > 400) {
                    yPositions[i] = 0;
                }

            }

        };
