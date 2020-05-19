class Rocket extends PhysicalObjects {
    constructor(x, y, velocity, acceleration, force, radius) {
        super(x, y, velocity, acceleration, force);
        this._radius = radius;
    }
    Render() {
        ellipse(this._x, this._y, this._radius, this._radius);
    }


}