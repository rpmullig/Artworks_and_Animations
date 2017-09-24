void setup() {

    size(400, 400);

    fill(126);

    background(102);

}


draw = function () {

    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);

    // answer rounded for array usage
    var answer = round(floor(random(1, 6)));

    fill(6, 34, 110);
    if (answer === 1) {
        ellipse(200, 208, 250, 250);
    } else if (answer === 2) {
        ellipse(200, 208, 250, 250);
        fill(0, 0, 0);
        rect(102, 297, 191, 55);
    } else if (answer === 3) {
        triangle(200, 70, 330, 300, 70, 300);
    } else if (answer === 4) {
        rect(100, 95, 200, 200);
    } else if (answer === 5) {
        noStroke();
        rect(100, 95, 200, 200);
        triangle(200, 20, 300, 95, 100, 95);
    }



    // error catching 
    if (answer > 0 && answer < 7) {

        // strings for first line corresponding to 'answer' variable
        var strings_1st_line = ["One is the", "It takes Two", "Three times", "Four is", "High fives"];

        // strings for second line corresponding to 'answer' variable
        var strings_2nd_line = ["loneliest number", "to Tango", "is the charm", "110 in binary", " for five fingers"];

        stroke(255, 255, 255);
        fill(random(1, 51) * answer, random(1, 51) * answer, random(1, 51) * answer);
        triangle(200, 104, 280, 280, 120, 280);
        fill(255, 255, 255);

        textSize(20);
        text(answer, 195, 154);
        textSize(12);
        text(strings_1st_line[answer - 1], 168, 200);
        text(strings_2nd_line[answer - 1], 166, 229);




    }
    exit();

};
