class ObjectsThatCanEvolve {
    //Abstract class.
    constructor(DNA) {
        this._DNA = DNA;
    }
    _mutate(newDNA) {
        this._DNA = newDNA;
    }
    CalulateFitness() {
        throw Error("You shouldnt instantiate a generic class");
    }
}