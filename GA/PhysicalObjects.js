class PhysicalObjects {
    //Abstract Class
    constructor(x, y, velocity, acceleration, force) {
        // super();
        this._x = x;
        this._y = y;
        this._velocity = velocity;
        this._acceleration = acceleration
        this._force = force;
    }
    Tick(shouldClear = true) {
        this.ApplyForce(this._force);
        this._velocity.add(this._acceleration);
        this._x += this._velocity.x;
        this._y += this._velocity.y;
        if (shouldClear) { this._clearForces(); }
    }
    ApplyForce(force) {
        this.acceleration += force;
    }
    _clearForces() {
        this._acceleration = 0;
    }
    Render() {
        throw Error("Create an specific object and implement the render function");

    }

}