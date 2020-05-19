let targ;
let lifeSpan = 400;
let count = 100;
let pop = [];
let popSize = 100;
let cel;

function setup() {
    createCanvas(400, 300);
    targ = new Target(width / 2, 8, 16, 16);

    cel = new SelectionForce(targ);


}

function draw() {

    background(0);
    fill(255);
    cel.Render();
    targ.Render();
    count++;
    if (count >= lifeSpan) {
        count = 0;
        cel.SelectNewPop();
    }

}

function _getNewPop() {
    let pop = [];
    for (let i = 0; i < popSize; i++) {
        let test = new RocketDNA(random(0, width), random(height, height - 3), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1))
        let rock = new MutableRocket(test);
        pop[i] = rock;
    }
    return pop
}