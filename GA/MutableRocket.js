class MutableRocket extends Rocket {
    constructor(DNAobj, mutationRate = 0.01) {

        let DNA = DNAobj.DNA;
        let velocity = createVector(DNA[2], DNA[3])
        let acc = createVector(DNA[4], DNA[5])
        let force = createVector(DNA[6], DNA[7])
        super(DNA[0], DNA[1], velocity, acc, force, 16);
        this.DNAobj = DNAobj;
        this._mutationRate = mutationRate
    }

    Mutate() {
        this.DNAobj.Mutate(this._mutationRate);
    }
    CalculateFitness(targx, targy) {
        this.fitness = 1 / p5.Vector.dist(createVector(this._x, this._y), createVector(targx, targy));
        this.fitness = pow(this.fitness, 4);
    }

    normalizedFitness(normalized) {
        this.normalizedFitness = normalized;
    }
}