"use strict";
exports.__esModule = true;
exports.Subject = exports.Lms = void 0;
var Lms = /** @class */ (function () {
    function Lms() {
        this.mapData = new Map();
    }
    Lms.prototype.add = function (data) {
        this.mapData.set(data.id, data);
    };
    Lms.prototype.remove = function (data) {
        this.mapData["delete"](data.id);
    };
    Lms.prototype.verify = function (data) {
        return this.mapData.get(data.id) ? true : false;
    };
    Lms.prototype.readAll = function () {
        var returnArray = [];
        this.mapData.forEach(function (value) {
            returnArray.push(value);
        });
        return returnArray;
    };
    return Lms;
}());
exports.Lms = Lms;
var Subject = /** @class */ (function () {
    function Subject(data) {
        this.title = data.title;
        this.lessons = data.lessons;
        if (data.description) {
            this.description = data.description;
        }
    }
    return Subject;
}());
exports.Subject = Subject;
