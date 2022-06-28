import { pupil } from "./pupils.mjs";
import { teacherId } from "./teachers.mjs";
import { groupId } from "./groups.mjs";
import { groups } from "./groups.mjs";
import { teachers } from "./teachers.mjs";
import { lms } from "./lms.mjs";
import { history } from "./lms.mjs";

const pupilId = pupil.id;

export class GradeBooks {
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
    this.mapData = new Map();
  }

  add(groupId) {
    this.id = Math.random();
    this.mapData.set(this.id, this.groups.mapData.get(groupId));
    return this.id;
  }

  clear() {
    this.mapData = new Map();
  }

  addRecord(gradeBookId, record) {
    let firstStudent;
    let lastStudent;
    let firstTeacher = this.teachers.mapData.get(record.teacherId).name.first;
    let lastTeacher = this.teachers.mapData.get(record.teacherId).name.last;
    this.mapData.get(gradeBookId).pupils.forEach((element) => {
      if (element.id === record.pupilId) {
        firstStudent = element.name.first;
      }
    });
    this.mapData.get(gradeBookId).pupils.forEach((element) => {
      if (element.id === record.pupilId) {
        lastStudent = element.name.last;
      }
    });
    let subject = this.lms.mapData.get(record.subjectId).title;
    if (this.mapData.get(gradeBookId)[record.pupilId] === undefined) {
      this.mapData.get(gradeBookId)[record.pupilId] = {
        name: firstStudent + " " + lastStudent,
        records: [
          {
            teacher: firstTeacher + " " + lastTeacher,
            subject: subject,
            lesson: record.lesson,
            mark: record.mark,
          },
        ],
      };
    } else {
      this.mapData.get(gradeBookId)[pupilId].records.push({
        teacher: firstTeacher + " " + lastTeacher,
        subject: subject,
        lesson: record.lesson,
        mark: record.mark,
      });
    }
  }

  read(gradebookId, pupilId) {
    return this.mapData.get(gradebookId)[pupilId];
  }

  readAll(gradebookId) {
    let toReturn = [];
    // this.mapData.get(gradebookId).forEach((el) => {
    //   if (!el.name) {
    //     toReturn.push(el);
    //   }
    // });
    for (let el in this.mapData.get(gradebookId)) {
      if (this.mapData.get(gradebookId)[el].records) {
        toReturn.push(this.mapData.get(gradebookId)[el]);
      }
    }
    return toReturn;
  }
}

const gradebooks = new GradeBooks(groups, teachers, lms);

const gradebook = gradebooks.add(groupId);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9,
};

gradebooks.addRecord(gradebook, record);

const student = gradebooks.readAll(gradebook);

console.log(student);
