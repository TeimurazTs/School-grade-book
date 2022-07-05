"use strict";
exports.__esModule = true;
exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups() {
        this.mapData = new Map();
    }
    Groups.prototype.add = function (room) {
        this.id = Math.random().toString();
        this.mapData.set(this.id, { id: this.id, room: room, pupils: [] });
        return this.id;
    };
    Groups.prototype.addPupil = function (id, data) {
        this.mapData.get(id).pupils.push(data);
    };
    Groups.prototype.removePupil = function (groupId, pupilId) {
        var _this = this;
        var i = 0;
        this.mapData.get(groupId).pupils.forEach(function (el) {
            i++;
            if (el.id === pupilId) {
                _this.mapData.get(groupId).pupils.splice(i - 1, 1);
            }
        });
    };
    Groups.prototype.update = function (id, data) {
        this.mapData.get(id).room = data.room;
    };
    Groups.prototype.read = function (id) {
        return this.mapData.get(id);
    };
    Groups.prototype.readAll = function () {
        var returnArray = [];
        this.mapData.forEach(function (value) {
            returnArray.push(value);
        });
        return returnArray;
    };
    return Groups;
}());
exports.Groups = Groups;
