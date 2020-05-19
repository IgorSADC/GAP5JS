class DNA {
    constructor(params) {
        this._params = params;
        this.params_size = this._params.length;
    }
    get DNA() {
        return this._params;
    }
    CrossOver(mate) {
        let midPoint = random(this.params_size);
        let newDNA = [];
        for (let i = 0; i < this.params_size; i++) {
            if (i < midPoint) {
                newDNA.push(this._params[i]);
            } else {
                newDNA.push(mate._params[i]);
            }
        }
        return newDNA;
    }

    Mutate(mutationRate) {
        for (let i = 0; i < this.params_size; i++) {
            if (random() < mutationRate) {
                this._params[i] += random(-1, 1);
            }
        }
    }
}