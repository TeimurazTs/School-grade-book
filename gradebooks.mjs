export class GradeBooks {
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
    this.mapData = new Map();
  }

  add(groupId) {
    this.id = Math.random();
    this.mapData.set(id, this.groups.mapData.get(groupId));
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
        surname = element.name.lastStudent;
      }
    });
    let subject = this.lms.get(record.subjectId).title;
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
    this.mapData.get(gradebookId).forEach((el) => {
      if (el.records) [toReturn.push(el)];
    });
    return toReturn;
  }
}
