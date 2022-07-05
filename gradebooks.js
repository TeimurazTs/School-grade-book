"use strict";
exports.__esModule = true;
exports.GradeBooks = void 0;
var index_1 = require("./index");
var pupilId = index_1.pupil.id;
var GradeBooks = /** @class */ (function () {
    function GradeBooks(groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.mapData = new Map();
    }
    GradeBooks.prototype.add = function (groupId) {
        this.id = Math.random().toString();
        this.mapData.set(this.id, this.groups.mapData.get(groupId));
        return this.id;
    };
    GradeBooks.prototype.clear = function () {
        this.mapData = new Map();
    };
    GradeBooks.prototype.addRecord = function (gradeBookId, record) {
        var firstStudent = "";
        var lastStudent = "";
        var firstTeacher = this.teachers.mapData.get(record.teacherId).name.first;
        var lastTeacher = this.teachers.mapData.get(record.teacherId).name.last;
        this.mapData.get(gradeBookId).pupils.forEach(function (element) {
            if (element.id === record.pupilId) {
                firstStudent = element.name.first;
            }
        });
        this.mapData.get(gradeBookId).pupils.forEach(function (element) {
            if (element.id === record.pupilId) {
                lastStudent = element.name.last;
            }
        });
        var subject = this.lms.mapData.get(record.subjectId).title;
        if (this.mapData.get(gradeBookId)[record.pupilId] === undefined) {
            this.mapData.get(gradeBookId)[record.pupilId] = {
                name: firstStudent + " " + lastStudent,
                records: [
                    {
                        teacher: firstTeacher + " " + lastTeacher,
                        subject: subject,
                        lesson: record.lesson,
                        mark: record.mark
                    },
                ]
            };
        }
        else {
            this.mapData.get(gradeBookId)[pupilId].records.push({
                teacher: firstTeacher + " " + lastTeacher,
                subject: subject,
                lesson: record.lesson,
                mark: record.mark
            });
        }
    };
    GradeBooks.prototype.read = function (gradebookId, pupilId) {
        return this.mapData.get(gradebookId)[pupilId];
    };
    GradeBooks.prototype.readAll = function (gradebookId) {
        var toReturn = [];
        for (var el in this.mapData.get(gradebookId)) {
            if (this.mapData.get(gradebookId)[el].records) {
                toReturn.push(this.mapData.get(gradebookId)[el]);
            }
        }
        return toReturn;
    };
    return GradeBooks;
}());
exports.GradeBooks = GradeBooks;
