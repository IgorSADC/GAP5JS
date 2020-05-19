class Target {
    constructor(x, y, w, h) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;

    }
    Render() {
        rect(this._x, this._y, this._w, this._h);
    }
}