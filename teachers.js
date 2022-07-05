"use strict";
exports.__esModule = true;
exports.Teachers = void 0;
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.mapData = new Map();
    }
    Teachers.prototype.add = function (data) {
        this.id = Math.random().toString();
        this.mapData.set(this.id, data);
        return this.id;
    };
    Teachers.prototype.read = function (id) {
        return this.mapData.get(id);
    };
    Teachers.prototype.update = function (id, data) {
        this.mapData.set(id, data);
    };
    Teachers.prototype.remove = function (id) {
        this.mapData["delete"](id);
    };
    return Teachers;
}());
exports.Teachers = Teachers;
