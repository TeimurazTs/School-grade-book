"use strict";
exports.__esModule = true;
exports.Pupils = void 0;
var Pupils = /** @class */ (function () {
    function Pupils() {
        this.mapData = new Map();
    }
    Pupils.prototype.add = function (data) {
        this.id = Math.random().toString();
        data.id = this.id;
        this.mapData.set(this.id, data);
        return { id: this.id };
    };
    Pupils.prototype.read = function (id) {
        return this.mapData.get(id);
    };
    Pupils.prototype.update = function (id, data) {
        this.mapData.set(id, data);
    };
    Pupils.prototype.remove = function (id) {
        this.mapData["delete"](id);
    };
    return Pupils;
}());
exports.Pupils = Pupils;
