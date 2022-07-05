"use strict";
exports.__esModule = true;
exports.groupId = exports.groups = exports.lms = exports.history = exports.pupil = void 0;
var LMS_1 = require("./LMS");
var pupils_1 = require("./pupils");
var gradebooks_1 = require("./gradebooks");
var teachers_1 = require("./teachers");
var groups_1 = require("./groups");
// teachers stuff
var teachers = new teachers_1.Teachers();
var teacherId = teachers.add({
    name: {
        first: "Edward",
        last: "Norton"
    },
    dateOfBirth: "18.08.1969",
    emails: [
        {
            email: "CoolestGuyEver@gmail.com",
            primary: true
        },
    ],
    phones: [
        {
            phone: "599455665",
            primary: true
        },
    ],
    sex: "Male",
    subjects: [
        {
            subject: "History"
        },
    ]
});
// pupil stuff
var pupils = new pupils_1.Pupils();
exports.pupil = pupils.add({
    name: {
        first: "Nina",
        last: "Tkemaladze"
    },
    dateOfBirth: "18.08.1970",
    emails: [
        {
            email: "ninaTkemaladze@gmail.com",
            primary: true
        },
    ],
    phones: [
        {
            phone: "599457665",
            primary: true
        },
    ],
    sex: "Female"
});
// lms stuff
exports.history = new LMS_1.Subject({
    title: "History",
    lessons: 24
});
exports.lms = new LMS_1.Lms();
exports.lms.add(exports.history);
// groups stuff
var pupilId = exports.pupil.id;
var room = 236;
exports.groups = new groups_1.Groups();
exports.groupId = exports.groups.add(room);
exports.groups.addPupil(exports.groupId, pupils.read(exports.pupil.id));
var returnTo = exports.groups.readAll();
// gradebooks stuff
var gradebooks = new gradebooks_1.GradeBooks(exports.groups, teachers, exports.lms);
var gradebook = gradebooks.add(exports.groupId);
var record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: exports.history.id,
    lesson: 1,
    mark: 9
};
gradebooks.addRecord(gradebook, record);
var gradebook1 = gradebooks.readAll(gradebook);
console.log(gradebook1);
