class SelectionForce {
    constructor(target) {
        this._getNewRandomPop();
        this._target = target;

    }
    MatingPool(maxFitness) {
        this._matingPool = [];
        for (let i = 0; i < popSize; i++) {
            let n = this.pop[i].fitness / maxFitness * 100;
            for (let z = 0; z < n; z++) {
                this._matingPool.push(pop[i]);
            }
        }
    }
    _getNewRandomPop() {
        let pop = [];
        for (let i = 0; i < popSize; i++) {
            let test = new RocketDNA(random(0, width), random(height, height - 3), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1), random(-1, 1))
            let rock = new MutableRocket(test);
            pop[i] = rock;
        }
        this.pop = pop
    }
    SelectNewPop() {
        let maxFitness = 0;
        for (let i = 0; i < popSize; i++) {
            pop[i].CalculateFitness(targ._x, targ._y);
            let curFitness = pop[i].fitness;
            if (curFitness > maxFitness) { maxFitness = curFitness; }
        }
        this.MatingPool(maxFitness);
        let newPop = [];
        for (let i = 0; i < popSize; i++) {
            let newDNA = new DNA(this._getRandomParentDNA().CrossOver(this._getRandomParentDNA()));
            let newRocket = new MutableRocket(newDNA);

            newRocket.Mutate();
            newPop.push(newRocket);
        }
        this.pop = newPop;
        console.log(maxFitness);
        console.log(newPop);
    }

    _getRandomParentDNA() {
        return this._matingPool[floor(random(this._matingPool.length))].DNAobj;
    }
    Render() {
        pop = this.pop;
        for (let i = 0; i < popSize; i++) {
            pop[i].Tick();
            pop[i].Render();
        }
    }

}